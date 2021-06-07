package tht.closure.operator.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;
import tht.closure.operator.model.entity.SubCatalog;

@Repository
public interface SubCatalogRepository extends JpaRepository<SubCatalog, Long>, QuerydslPredicateExecutor<SubCatalog> {
}
