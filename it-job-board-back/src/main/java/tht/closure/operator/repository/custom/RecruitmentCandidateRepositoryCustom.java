package tht.closure.operator.repository.custom;

import tht.closure.operator.model.entity.RecruitmentCandidate;

import java.util.List;

public interface RecruitmentCandidateRepositoryCustom {

    List<RecruitmentCandidate> getAllByCandidateId(Long id);
}
