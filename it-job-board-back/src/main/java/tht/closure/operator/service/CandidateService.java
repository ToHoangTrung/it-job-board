package tht.closure.operator.service;

import tht.closure.operator.model.dto.CandidateDto;
import tht.closure.operator.model.entity.User;

import java.util.List;

public interface CandidateService {
    void addRecruitmentToCandidateApplyList(User user, Long recruitmentId);

    void addRecruitmentToCandidateFavoriteList(User user, Long recruitmentId);

    void removeSavedRecruitmentOfCandidate(User user, List<Long> recruitmentIds);

    void updateRecruitmentStatusFromApplyListOfCandidate(User user, Long recruitmentId, String status);

    void updateCandidateInfo(CandidateDto candidateDto);
}
