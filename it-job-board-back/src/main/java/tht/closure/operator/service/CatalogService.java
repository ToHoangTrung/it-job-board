package tht.closure.operator.service;

import tht.closure.operator.model.dto.CatalogDto;
import tht.closure.operator.model.dto.SubCatalogDto;

import java.util.List;

public interface CatalogService {
    List<CatalogDto> getALlCatalogAndTheirSubCatalog();

    List<SubCatalogDto> getAllSubCatalog();
}
