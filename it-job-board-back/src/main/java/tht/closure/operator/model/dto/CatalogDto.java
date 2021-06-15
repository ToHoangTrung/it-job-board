package tht.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CatalogDto extends AbstractDto{

    @NotNull(message = "Name can not be blank")
    private String name;

    private List<SubCatalogDto> subCatalogs = new ArrayList<>();
}
