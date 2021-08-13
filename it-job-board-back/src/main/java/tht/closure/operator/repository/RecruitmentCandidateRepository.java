package tht.closure.operator.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tht.closure.operator.model.entity.RecruitmentCandidate;
import tht.closure.operator.repository.custom.RecruitmentCandidateRepositoryCustom;

@Repository
public interface RecruitmentCandidateRepository extends JpaRepository<RecruitmentCandidate, Long>,
        RecruitmentCandidateRepositoryCustom {
}
