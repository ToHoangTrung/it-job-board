package tht.closure.operator.service.impl;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import net.bytebuddy.asm.Advice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tht.closure.operator.model.dto.RecruiterDto;
import tht.closure.operator.model.entity.*;
import tht.closure.operator.predicate.recruitment.RecruitmentPredicatesBuilder;
import tht.closure.operator.repository.RecruiterRepository;
import tht.closure.operator.service.RecruiterService;
import tht.closure.operator.util.RecruiterMapper;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
public class RecruiterServiceImpl implements RecruiterService {

    @PersistenceContext
    private EntityManager em;

    @Autowired
    private RecruiterRepository recruiterRepository;

    @Override
    public Set<RecruiterDto> searchRecruiters(String keyword) {
        return null;
//        BooleanExpression exp = createBooleanExpressionFromParam(keyword);
//        List<Recruiter> recruiters = new JPAQuery<Recruiter>(em)
//                .from(QRecruiter.recruiter).distinct()
//                .where(exp).fetch();
//        return recruiters.stream().map(RecruiterMapper::recruiterToRecruiterDto).collect(Collectors.toSet());
    }

    @Override
    public void updateRecruiterInfo(RecruiterDto recruiterDto) {

    }

    @Override
    public RecruiterDto getOneRecruiter(Long id) {
        Recruiter recruiter = recruiterRepository.getOneRecruiter(id);
        return RecruiterMapper.recruiterToRecruiterDto(recruiter);
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
