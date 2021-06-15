package tht.closure.operator.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tht.closure.operator.model.dto.CandidateDto;
import tht.closure.operator.model.entity.Candidate;
import tht.closure.operator.model.entity.CandidateRecruitment;
import tht.closure.operator.model.entity.Recruitment;
import tht.closure.operator.model.entity.User;
import tht.closure.operator.model.exception.recruitment.RecruitmentNotFoundException;
import tht.closure.operator.repository.CandidateRepository;
import tht.closure.operator.service.CandidateService;
import tht.closure.operator.validator.RecruitmentValidator;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CandidateServiceImpl implements CandidateService {

    @Autowired
    private CandidateRepository candidateRepository;

    @Autowired
    private RecruitmentValidator recruitmentValidator;

    @Override
    public void addRecruitmentToCandidateApplyList(User user, Long recruitmentId) {
        Recruitment recruitment = recruitmentValidator.getRecruitmentIfExist(recruitmentId);
        Candidate candidate = getCandidateFromUser(user.getId());
        candidate.getCandidateRecruitments().add(new CandidateRecruitment(candidate, recruitment, CandidateRecruitment.Type.APPLY, CandidateRecruitment.Status.NEW));
    }

    @Override
    public void addRecruitmentToCandidateFavoriteList(User user, Long recruitmentId) {
        Recruitment recruitment = recruitmentValidator.getRecruitmentIfExist(recruitmentId);
        Candidate candidate = getCandidateFromUser(user.getId());
        candidate.getCandidateRecruitments().add(new CandidateRecruitment(candidate, recruitment, CandidateRecruitment.Type.FAVORITE, null));
    }

    @Override
    public void removeSavedRecruitmentOfCandidate(User user, List<Long> recruitmentIds) {
        Candidate candidate = getCandidateFromUser(user.getId());
        candidate.getCandidateRecruitments().stream().map(CandidateRecruitment::getRecruitment).
                collect(Collectors.toList()).removeIf(recruitment -> recruitmentIds.contains(recruitment.getId()));
    }

    @Override
    public void updateRecruitmentStatusFromApplyListOfCandidate(User user, Long recruitmentId, String status) {
        recruitmentValidator.validateApplyRecruitmentStatusValid(status);
        recruitmentValidator.validateRecruitmentIdExist(recruitmentId);
        Candidate candidate = getCandidateFromUser(user.getId());
        recruitmentValidator.validateRecruitmentExistInCandidateRecruitment(candidate, recruitmentId);
        candidate.getCandidateRecruitments()
                .stream().filter(candidateRecruitment1 -> candidateRecruitment1.getRecruitment().getId().equals(recruitmentId))
                .findFirst().ifPresent(recruitment -> recruitment.setStatus(CandidateRecruitment.Status.valueOf(status)));;
    }

    @Override
    public void updateCandidateInfo(CandidateDto candidateDto) {

    }

    private Candidate getCandidateFromUser(Long userId) {
        return candidateRepository.findByUserId(userId);
    }
}
