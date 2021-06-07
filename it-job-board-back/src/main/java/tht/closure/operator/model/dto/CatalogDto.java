package tht.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CatalogDto extends AbstractDto{

    private String name;

    private List<SubCatalogDto> subCatalogs = new ArrayList<>();
}
