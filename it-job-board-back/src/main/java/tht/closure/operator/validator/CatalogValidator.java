package tht.closure.operator.validator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import tht.closure.operator.model.entity.Candidate;
import tht.closure.operator.model.entity.Catalog;
import tht.closure.operator.model.entity.SubCatalog;
import tht.closure.operator.model.exception.candidate.CandidateNotFoundException;
import tht.closure.operator.model.exception.catalog.CatalogNotFoundException;
import tht.closure.operator.repository.CatalogRepository;
import tht.closure.operator.repository.SubCatalogRepository;

import java.util.ArrayList;
import java.util.List;

@Component
public class CatalogValidator {

    @Autowired
    private CatalogRepository catalogRepository;

    @Autowired
    private SubCatalogRepository subCatalogRepository;

    public Catalog getCatalogIfExist(Long id) {
        Catalog catalog = catalogRepository.findById(id).orElse(null);
        if (catalog == null) {
            throw new CatalogNotFoundException(String.format("" +
                    "Catalog with id %s does not found", id));
        }
        return catalog;
    }

    public SubCatalog getSubCatalogIfExist(Long id) {
        SubCatalog subCatalog = subCatalogRepository.findById(id).orElse(null);
        if (subCatalog == null) {
            throw new CatalogNotFoundException(String.format("" +
                    "Catalog with id %s does not found", id));
        }
        return subCatalog;
    }

    public void validateCatalogsExist(List<Long> ids) {
        List<Long> notFoundCatalogs = new ArrayList<>();
        for (long id : ids) {
            try {
                Catalog catalog = getCatalogIfExist(id);
            } catch (Exception e) {
                notFoundCatalogs.add(id);
            }
        }
        if (!notFoundCatalogs.isEmpty()) {
            throw new CatalogNotFoundException(String.format("" +
                    "These catalog is not found: %s", notFoundCatalogs));
        }
    }

    public void validateSubCatalogsExist(List<Long> ids) {
        List<Long> notFoundCatalogs = new ArrayList<>();
        for (long id : ids) {
            try {
                SubCatalog subCatalog = getSubCatalogIfExist(id);
            } catch (Exception e) {
                notFoundCatalogs.add(id);
            }
        }
        if (!notFoundCatalogs.isEmpty()) {
            throw new CatalogNotFoundException(String.format("" +
                    "These catalog is not found: %s", notFoundCatalogs));
        }
    }
}
