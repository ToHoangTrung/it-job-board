package tht.closure.operator.predicate;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.Expressions;
import org.springframework.stereotype.Component;
import tht.closure.operator.model.dto.SearchCriteria;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Component
public class RecruitmentPredicatesBuilder {

    private final List<SearchCriteria> params;

    public RecruitmentPredicatesBuilder() {
        params = new ArrayList<>();
    }

    public RecruitmentPredicatesBuilder with(final String key, final String operation, final Object value) {
        params.add(new SearchCriteria(key, operation, value));
        return this;
    }

    public BooleanExpression build() {
        if (params.isEmpty()) {
            return null;
        }

        final List<BooleanExpression> predicates = params.stream().map(param -> {
            RecruitmentPredicate predicate = new RecruitmentPredicate(param);
            return predicate.getPredicate();
        }).filter(Objects::nonNull).collect(Collectors.toList());

        BooleanExpression result = Expressions.asBoolean(true).isTrue();
        for (BooleanExpression predicate : predicates) {
            result = result.and(predicate);
        }

        return result;
    }
}
