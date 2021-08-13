package tht.closure.operator.repository.custom.impl;

import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.stereotype.Service;
import tht.closure.operator.model.entity.*;
import tht.closure.operator.repository.custom.RecruitmentCandidateRepositoryCustom;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class RecruitmentCandidateRepositoryCustomImpl implements RecruitmentCandidateRepositoryCustom {

    @PersistenceContext
    private EntityManager em;


    @Override
    public List<RecruitmentCandidate> getAllByCandidateId(Long id) {
        return new JPAQuery<RecruitmentCandidate>(em)
                .from(QRecruitmentCandidate.recruitmentCandidate)
                .innerJoin(QRecruitmentCandidate.recruitmentCandidate.candidate, QCandidate.candidate)
                .fetchJoin()
                .innerJoin(QRecruitmentCandidate.recruitmentCandidate.recruitment, QRecruitment.recruitment)
                .fetchJoin()
                .innerJoin(QRecruitment.recruitment.recruiter, QRecruiter.recruiter)
                .fetchJoin()
                .innerJoin(QRecruiter.recruiter.user, QUser.user)
                .fetchJoin()
                .where(QCandidate.candidate.id.eq(id))
                .fetch();
    }
}
