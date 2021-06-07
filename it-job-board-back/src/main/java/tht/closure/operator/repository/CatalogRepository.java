package tht.closure.operator.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import tht.closure.operator.model.entity.Catalog;

public interface CatalogRepository extends JpaRepository<Catalog, Long>, QuerydslPredicateExecutor<Catalog> {
}
