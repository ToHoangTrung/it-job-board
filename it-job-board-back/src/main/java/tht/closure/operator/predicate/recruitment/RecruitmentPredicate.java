package tht.closure.operator.predicate.recruitment;

import com.querydsl.core.types.dsl.*;
import tht.closure.operator.model.dto.SearchCriteria;
import tht.closure.operator.model.entity.QRecruitment;
import tht.closure.operator.model.entity.Recruitment;

public class RecruitmentPredicate {

    private SearchCriteria criteria;

    public RecruitmentPredicate(final SearchCriteria criteria) {
        this.criteria = criteria;
    }

    public BooleanExpression getPredicate() {
        final PathBuilder<Recruitment> entityPath = new PathBuilder<>(Recruitment.class, "recruitment");

        switch (criteria.getKey()) {
            case "subCatalogId": {
                if (criteria.getOperation().equalsIgnoreCase(":")) {
                    return QRecruitment.recruitment.recruitmentSubCatalogs.any().subCatalog.id.eq((long) Integer.parseInt(getCriteria().getValue().toString()));
                }
                break;
            }
            case "recruiterId": {
                if (criteria.getOperation().equalsIgnoreCase(":")) {
                    return QRecruitment.recruitment.recruiter.id.eq((long) Integer.parseInt(getCriteria().getValue().toString()));
                }
                break;
            }
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
