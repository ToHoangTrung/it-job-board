package tht.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;
import tht.closure.operator.model.dto.main.AbstractDto;

import javax.validation.constraints.NotNull;

@Getter
@Setter
public class SubCatalogDto extends AbstractDto {

    @NotNull(message = "Name can not be blank")
    private String name;
}
