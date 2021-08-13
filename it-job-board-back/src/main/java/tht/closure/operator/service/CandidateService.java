package tht.closure.operator.service;

import tht.closure.operator.model.dto.CandidateDto;
import tht.closure.operator.model.dto.RecruitmentCandidateDto;
import tht.closure.operator.model.entity.User;

import java.util.List;

public interface CandidateService {

    CandidateDto getCandidateFromUserId(Long userId);

    List<RecruitmentCandidateDto> getAllApplyOrFavoriteRecruitmentOfCandidate(CandidateDto candidateDto);

    void removeCandidateFavoriteRecruitment(CandidateDto candidateDto, Long recruitmentId);

    void addOneCandidateFavoriteRecruitment(CandidateDto candidateDto, Long recruitmentId);
}
