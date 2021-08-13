package tht.closure.operator.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tht.closure.operator.model.dto.CandidateDto;
import tht.closure.operator.model.dto.RecruitmentCandidateDto;
import tht.closure.operator.model.entity.*;
import tht.closure.operator.model.exception.candidate.DuplicateSavedRecruitmentException;
import tht.closure.operator.model.exception.candidate.RemoveApplyRecruitmentInsteadOfFavoriteException;
import tht.closure.operator.repository.CandidateRepository;
import tht.closure.operator.repository.RecruitmentCandidateRepository;
import tht.closure.operator.service.CandidateService;
import tht.closure.operator.util.CandidateMapper;
import tht.closure.operator.util.RecruitmentMapper;
import tht.closure.operator.validator.CandidateValidator;
import tht.closure.operator.validator.RecruitmentValidator;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class CandidateServiceImpl implements CandidateService {

    @Autowired
    private CandidateRepository candidateRepository;

    @Autowired
    private RecruitmentValidator recruitmentValidator;

    @Autowired
    private CandidateValidator candidateValidator;

    @Override
    public CandidateDto getCandidateFromUserId(Long userId) {
        return CandidateMapper.candidateToCandidateDto(getCandidateFromUser(userId));
    }

    @Override
    public List<RecruitmentCandidateDto> getAllApplyOrFavoriteRecruitmentOfCandidate(CandidateDto candidateDto) {
        Candidate candidate = candidateValidator.getCandidateIfExist(candidateDto.getId());
        List<RecruitmentCandidateDto> recruitmentCandidateDtos = new ArrayList<>();
        candidate.getRecruitmentCandidates().forEach(recruitmentCandidate -> {
            RecruitmentCandidateDto recruitmentCandidateDto = new RecruitmentCandidateDto();
            recruitmentCandidateDto.setRecruitment(
                    RecruitmentMapper.recruitmentToRecruitmentDto(
                            recruitmentCandidate.getRecruitment()));
            recruitmentCandidateDto.setStatus(
                    RecruitmentMapper.recruitmentCandidateStatusToRecruitmentCandidateStatusDto(
                            recruitmentCandidate.getStatus()));
            recruitmentCandidateDto.setType(
                    RecruitmentMapper.recruitmentCandidateTypeToRecruitmentCandidateTypeDto(
                            recruitmentCandidate.getType()));
            recruitmentCandidateDto.setId(recruitmentCandidate.getId());
            recruitmentCandidateDtos.add(recruitmentCandidateDto);
        });
        return recruitmentCandidateDtos;
    }

    @Override
    public void addOneCandidateFavoriteRecruitment(CandidateDto candidateDto, Long recruitmentId) {
        Candidate candidate = candidateValidator.getCandidateIfExist(candidateDto.getId());
        Recruitment recruitment = recruitmentValidator.getRecruitmentIfExist(recruitmentId);
        RecruitmentCandidate existRecruitmentCandidate = candidate.getRecruitmentCandidates().stream()
                .filter(recruitmentCandidate -> recruitmentCandidate.getRecruitment().getId().equals(recruitment.getId()))
                .findFirst().orElse(null);
        if (existRecruitmentCandidate == null || existRecruitmentCandidate.getType().equals(RecruitmentCandidate.Type.APPLY)) {
            RecruitmentCandidate newRecruitmentCandidate = new RecruitmentCandidate();
            newRecruitmentCandidate.setRecruitment(recruitment);
            newRecruitmentCandidate.setCandidate(candidate);
            newRecruitmentCandidate.setType(RecruitmentCandidate.Type.FAVORITE);
            newRecruitmentCandidate.setStatus(RecruitmentCandidate.Status.NONE);
            candidate.getRecruitmentCandidates().add(newRecruitmentCandidate);
            candidateRepository.save(candidate);
        } else {
            throw new DuplicateSavedRecruitmentException(String.format("" +
                    "Recruitment with id %s have already be saved at favorite recruitment ", recruitmentId));
        }
    }

    @Override
    public void removeCandidateFavoriteRecruitment(CandidateDto candidateDto, Long recruitmentId) {
        Candidate candidate = candidateValidator.getCandidateIfExist(candidateDto.getId());
        Recruitment recruitment = recruitmentValidator.getRecruitmentIfExist(recruitmentId);
        RecruitmentCandidate deleteRecruitmentCandidate = candidate.getRecruitmentCandidates().stream()
                .filter(recruitmentCandidate -> recruitmentCandidate.getRecruitment().getId().equals(recruitment.getId()))
                .findFirst().orElse(null);
        if (deleteRecruitmentCandidate == null || deleteRecruitmentCandidate.getType().equals(RecruitmentCandidate.Type.APPLY)) {
            throw new RemoveApplyRecruitmentInsteadOfFavoriteException(String.format("" +
                    "Recrutment with id %s is in apply type, can not remove in this condition", recruitmentId));
        }
        candidate.getRecruitmentCandidates().remove(deleteRecruitmentCandidate);
        candidateRepository.save(candidate);
    }

    private Candidate getCandidateFromUser(Long userId) {
        return candidateRepository.findByUserId(userId);
    }
}
