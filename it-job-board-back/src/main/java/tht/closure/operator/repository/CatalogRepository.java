package tht.closure.operator.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;
import tht.closure.operator.model.entity.Catalog;

@Repository
public interface CatalogRepository extends JpaRepository<Catalog, Long>, QuerydslPredicateExecutor<Catalog> {
}
