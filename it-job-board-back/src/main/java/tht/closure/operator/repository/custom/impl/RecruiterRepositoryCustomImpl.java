package tht.closure.operator.repository.custom.impl;

import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.stereotype.Service;
import tht.closure.operator.model.entity.*;
import tht.closure.operator.repository.custom.RecruiterRepositoryCustom;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Service
public class RecruiterRepositoryCustomImpl implements RecruiterRepositoryCustom {

    @PersistenceContext
    private EntityManager em;

    @Override
    public Recruiter getOneRecruiter(Long id) {
        return new JPAQuery<Recruiter>(em)
                .from(QRecruiter.recruiter)
                .innerJoin(QRecruiter.recruiter.recruiterSubCatalogs, QRecruiterSubCatalog.recruiterSubCatalog)
                .fetchJoin()
                .innerJoin(QRecruiterSubCatalog.recruiterSubCatalog.subCatalog, QSubCatalog.subCatalog)
                .fetchJoin()
                .innerJoin(QRecruiter.recruiter.recruitments, QRecruitment.recruitment)
                .fetchJoin()
                .innerJoin(QRecruitment.recruitment.recruitmentSubCatalogs, QRecruitmentSubCatalog.recruitmentSubCatalog)
                .fetchJoin()
                .innerJoin(QRecruitmentSubCatalog.recruitmentSubCatalog.subCatalog, QSubCatalog.subCatalog)
                .fetchJoin()
                .where(QRecruiter.recruiter.id.eq(id))
                .fetchOne();
    }
}
