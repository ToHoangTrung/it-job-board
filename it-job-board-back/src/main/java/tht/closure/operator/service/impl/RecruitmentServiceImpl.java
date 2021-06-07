package tht.closure.operator.service.impl;

import com.querydsl.core.types.dsl.BooleanExpression;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.model.entity.Recruitment;
import tht.closure.operator.predicate.RecruitmentPredicatesBuilder;
import tht.closure.operator.repository.RecruitmentRepository;
import tht.closure.operator.service.RecruitmentService;
import tht.closure.operator.util.RecruitmentMapper;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
@Transactional
public class RecruitmentServiceImpl implements RecruitmentService {

    @Autowired
    private RecruitmentRepository recruitmentRepository;

    @PersistenceContext
    private EntityManager em;

    @Override
    public List<RecruitmentDto> searchRecruitments(String keyword) {
        List<Recruitment> recruitments;
        BooleanExpression exp = createBooleanExpressionFromParam(keyword);
        recruitments  = (List<Recruitment>) recruitmentRepository.findAll(exp);
        return recruitments.stream().map(RecruitmentMapper::recruitmentToRecruitmentDto).collect(Collectors.toList());
    }

    private BooleanExpression createBooleanExpressionFromParam(String keyword) {
        RecruitmentPredicatesBuilder builder = new RecruitmentPredicatesBuilder();
        if (keyword != null) {
            Pattern pattern = Pattern.compile("(\\w+?)(:|<|>)(\\w+?),");
            Matcher matcher = pattern.matcher(keyword + ",");
            while (matcher.find()) {
                builder.with(matcher.group(1), matcher.group(2), matcher.group(3));
            }
        }
        return builder.build();
    }
}
