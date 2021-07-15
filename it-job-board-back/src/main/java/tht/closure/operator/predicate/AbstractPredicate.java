package tht.closure.operator.predicate;

import lombok.Getter;
import lombok.Setter;
import tht.closure.operator.model.dto.main.SearchCriteria;
import tht.closure.operator.util.ConstantItem;

import javax.persistence.MappedSuperclass;

@Getter
@Setter
@MappedSuperclass
public abstract class AbstractPredicate {

    public final String RECRUITMENT_SEARCH_CRITERION_EQUALS_SYMBOL = ConstantItem.SEARCH_CRITERION_EQUALS_SYMBOL;

    public static boolean isNumeric(final String str) {
        try {
            Integer.parseInt(str);
        } catch (final NumberFormatException e) {
            return false;
        }
        return true;
    }

    public boolean isEquals(SearchCriteria criteria) {
        return criteria.getOperation().equalsIgnoreCase(RECRUITMENT_SEARCH_CRITERION_EQUALS_SYMBOL);
    }
}
