package tht.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;
import tht.closure.operator.model.dto.main.AbstractDto;
import tht.closure.operator.model.dto.main.MultilingualDto;

import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
public class RecruiterDto extends AbstractDto {

    private String avatarUrl;

    @NotNull(message = "Name can not be blank")
    private String name;

    @NotNull(message = "Website can not be blank")
    private String website;

    private String facebook;

    @NotNull(message = "Location can not be blank")
    private String location;

    private List<RecruitmentDto> recruitments;

    private List<SubCatalogDto> subCatalogs;

    private Integer employeeQuantityMin;

    private Integer employeeQuantityMax;

    private OvertimeDto overtime;

    private String overviewContentUrl;

    private String advertiseContentUrl;

    @NotNull(message = "Country can not be blank")
    private CountryDto country;

    private TypeDto type;

    private DayOfWeekDto workStartDate;

    private DayOfWeekDto workEndDate;

    public static class OvertimeDto extends MultilingualDto { }

    @Getter
    @Setter
    public static class CountryDto extends MultilingualDto{
        private String flagImg;
    }

    public static class TypeDto extends MultilingualDto{ }

    public static class DayOfWeekDto extends MultilingualDto{ }
}
