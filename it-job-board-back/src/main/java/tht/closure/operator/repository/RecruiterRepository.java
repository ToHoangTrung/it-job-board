package tht.closure.operator.repository;

import com.querydsl.core.types.dsl.StringExpression;
import com.querydsl.core.types.dsl.StringPath;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer;
import org.springframework.data.querydsl.binding.QuerydslBindings;
import org.springframework.data.querydsl.binding.SingleValueBinding;
import org.springframework.stereotype.Repository;
import tht.closure.operator.model.entity.QRecruiter;
import tht.closure.operator.model.entity.Recruiter;

@Repository
public interface RecruiterRepository extends JpaRepository<Recruiter, Long>,
        QuerydslPredicateExecutor<Recruiter>, QuerydslBinderCustomizer<QRecruiter> {

    @Override
    default void customize(final QuerydslBindings bindings, final QRecruiter root) {
        bindings.bind(String.class)
                .first((SingleValueBinding<StringPath, String>) StringExpression::containsIgnoreCase);
        bindings.excluding(root.id);
    }
}
