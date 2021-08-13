package tht.closure.operator.service.impl;

import com.querydsl.jpa.impl.JPAQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tht.closure.operator.model.dto.CatalogDto;
import tht.closure.operator.model.dto.SubCatalogDto;
import tht.closure.operator.model.entity.Catalog;
import tht.closure.operator.model.entity.QCatalog;
import tht.closure.operator.model.entity.SubCatalog;
import tht.closure.operator.repository.SubCatalogRepository;
import tht.closure.operator.service.CatalogService;
import tht.closure.operator.util.CatalogMapper;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class CatalogServiceImpl implements CatalogService {

    @Autowired
    private SubCatalogRepository subCatalogRepository;

    @PersistenceContext
    private EntityManager em;


    @Override
    public List<CatalogDto> getALlCatalogAndTheirSubCatalog() {
        List<Catalog> catalogs = new JPAQuery<Catalog>(em)
                .from(QCatalog.catalog).distinct()
                .innerJoin(QCatalog.catalog.subCatalogs)
                .fetchJoin()
                .fetch();
        return catalogs.stream().map(CatalogMapper::catalogToCatalogDto).collect(Collectors.toList());
    }

    @Override
    public List<SubCatalogDto> getAllSubCatalog() {
        List<SubCatalog> subCatalogs = subCatalogRepository.findAll();
        return subCatalogs.stream().map(CatalogMapper::subCatalogToSubCatalogDto).collect(Collectors.toList());
    }
}
