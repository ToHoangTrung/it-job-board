package tht.closure.operator.predicate.recruiter;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.NumberPath;
import com.querydsl.core.types.dsl.PathBuilder;
import com.querydsl.core.types.dsl.StringPath;
import tht.closure.operator.model.dto.SearchCriteria;
import tht.closure.operator.model.entity.Recruiter;

public class RecruiterPredicate {

    private SearchCriteria criteria;

    public RecruiterPredicate(final SearchCriteria criteria) {
        this.criteria = criteria;
    }

    public BooleanExpression getPredicate() {
        final PathBuilder<Recruiter> entityPath = new PathBuilder<>(Recruiter.class, "recruiter");

        switch (criteria.getKey()) {
            default: {
                if (isNumeric(criteria.getValue().toString())) {
                    final NumberPath<Integer> path = entityPath.getNumber(criteria.getKey(), Integer.class);
                    final int value = Integer.parseInt(criteria.getValue().toString());
                    switch (criteria.getOperation()) {
                        case ":":
                            return path.eq(value);
                        case ">":
                            return path.goe(value);
                        case "<":
                            return path.loe(value);
                        default:
                            throw new IllegalStateException("Unexpected value: " + criteria.getOperation());
                    }
                } else {
                    final StringPath path = entityPath.getString(criteria.getKey());
                    if (criteria.getOperation().equalsIgnoreCase(":")) {
                        return path.containsIgnoreCase(criteria.getValue().toString());
                    }
                }
            }
        }
        return null;
    }

    public SearchCriteria getCriteria() {
        return criteria;
    }

    public void setCriteria(final SearchCriteria criteria) {
        this.criteria = criteria;
    }

    public static boolean isNumeric(final String str) {
        try {
            Integer.parseInt(str);
        } catch (final NumberFormatException e) {
            return false;
        }
        return true;
    }
}
