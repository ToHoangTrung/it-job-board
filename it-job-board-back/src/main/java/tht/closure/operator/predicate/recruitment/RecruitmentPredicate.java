package tht.closure.operator.predicate.recruitment;

import com.querydsl.core.types.dsl.*;
import tht.closure.operator.model.dto.main.SearchCriteria;
import tht.closure.operator.model.entity.QRecruitment;
import tht.closure.operator.model.entity.Recruitment;
import tht.closure.operator.predicate.AbstractPredicate;

public class RecruitmentPredicate extends AbstractPredicate {

    private SearchCriteria criteria;

    public RecruitmentPredicate(final SearchCriteria criteria) {
        this.criteria = criteria;
    }

    public final String RECRUITMENT_SEARCH_CRITERIA_HEADLINE = "headline";
    public final String RECRUITMENT_SEARCH_CRITERIA_SUB_CATALOG_ID = "category";
    public final String RECRUITMENT_SEARCH_CRITERIA_RECRUITER_ID = "company";
    public final String RECRUITMENT_SEARCH_CRITERIA_EXPERIENCE_ENUM = "experience";
    public final String RECRUITMENT_SEARCH_CRITERIA_POSITION_ENUM = "position";
    public final String RECRUITMENT_SEARCH_CRITERIA_CITY_ENUM = "city";

    public final String RECRUITMENT_SEARCH__CRITERION_CLASS_NAME = "recruitment";

    public BooleanExpression getPredicate() {
        final PathBuilder<Recruitment> entityPath = new PathBuilder<>(Recruitment.class, RECRUITMENT_SEARCH__CRITERION_CLASS_NAME);

        switch (criteria.getKey()) {
            case RECRUITMENT_SEARCH_CRITERIA_SUB_CATALOG_ID: {
                if (isEquals(criteria)) {
                    return QRecruitment.recruitment.recruitmentSubCatalogs.any().subCatalog.id.eq((long) Integer.parseInt(getCriteria().getValue().toString()));
                }
                break;
            }
            case RECRUITMENT_SEARCH_CRITERIA_RECRUITER_ID: {
                if (isEquals(criteria)) {
                    return QRecruitment.recruitment.recruiter.id.eq((long) Integer.parseInt(getCriteria().getValue().toString()));
                }
                break;
            }
            case RECRUITMENT_SEARCH_CRITERIA_POSITION_ENUM: {
                if (isEquals(criteria)) {
                    return QRecruitment.recruitment.position.eq(Recruitment.Position.valueOf(criteria.getValue().toString()));
                }
                break;
            }
            case RECRUITMENT_SEARCH_CRITERIA_HEADLINE: {
                if (isEquals(criteria)) {
                    return QRecruitment.recruitment.headline.containsIgnoreCase(criteria.getValue().toString());
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

}
