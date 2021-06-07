package tht.closure.operator.util;

import tht.closure.operator.model.dto.CatalogDto;
import tht.closure.operator.model.dto.SubCatalogDto;
import tht.closure.operator.model.entity.Catalog;
import tht.closure.operator.model.entity.SubCatalog;

import java.util.stream.Collectors;

public class CatalogMapper {

    public static CatalogDto catalogToCatalogDtoNoRelationShip(Catalog entity) {
        CatalogDto dto = new CatalogDto();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setVersion(entity.getVersion());
        return dto;
    }

    public static CatalogDto catalogToCatalogDto(Catalog entity) {
        CatalogDto dto = catalogToCatalogDtoNoRelationShip(entity);
        dto.setSubCatalogs(entity.getSubCatalogs().stream().map(CatalogMapper::subCatalogToSubCatalogDto).collect(Collectors.toList()));
        return dto;
    }

    public static Catalog catalogDtoToCatalog(CatalogDto dto) {
        Catalog entity = new Catalog();
        entity.setId(dto.getId());
        entity.setName(dto.getName());
        entity.setVersion(dto.getVersion());
        return entity;
    }

    public static SubCatalogDto subCatalogToSubCatalogDtoNoRelationShip(SubCatalog entity) {
        SubCatalogDto dto = new SubCatalogDto();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setVersion(entity.getVersion());
        return dto;
    }

    public static SubCatalogDto subCatalogToSubCatalogDto(SubCatalog entity) {
        SubCatalogDto dto = subCatalogToSubCatalogDtoNoRelationShip(entity);
        return dto;
    }

    public static SubCatalog subCatalogDtoToSubCatalog(SubCatalogDto dto) {
        SubCatalog entity = new SubCatalog();
        entity.setId(dto.getId());
        entity.setName(dto.getName());
        entity.setVersion(dto.getVersion());
        return entity;
    }

}
