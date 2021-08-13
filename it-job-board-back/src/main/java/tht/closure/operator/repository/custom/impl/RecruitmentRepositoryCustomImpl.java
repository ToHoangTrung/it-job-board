package tht.closure.operator.repository.custom.impl;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.stereotype.Service;
import tht.closure.operator.model.entity.*;
import tht.closure.operator.repository.custom.RecruitmentRepositoryCustom;
import tht.closure.operator.service.main.PagePaging;
import tht.closure.operator.service.main.PageResult;
import tht.closure.operator.service.main.impl.PageResultImpl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Service
public class RecruitmentRepositoryCustomImpl implements RecruitmentRepositoryCustom {

    @PersistenceContext
    private EntityManager em;

    @Override
    public PageResult<Recruitment> searchRecruitment(BooleanExpression exp, PagePaging pagePaging) {
        List<Recruitment> recruitments = new JPAQuery<Recruitment>(em)
                .from(QRecruitment.recruitment).distinct()
                .innerJoin(QRecruitment.recruitment.recruiter, QRecruiter.recruiter)
                .fetchJoin()
                .innerJoin(QRecruiter.recruiter.user, QUser.user)
                .fetchJoin()
                .where(exp)
                .limit(pagePaging.getLimit())
                .offset(pagePaging.getOffset())
                .orderBy(QRecruitment.recruitment.id.asc())
                .fetch();
        return new PageResultImpl<>(recruitments, (long) recruitments.size(), pagePaging);
    }
}
