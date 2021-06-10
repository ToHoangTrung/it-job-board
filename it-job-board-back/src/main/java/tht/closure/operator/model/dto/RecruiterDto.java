package tht.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class RecruiterDto extends AbstractDto{

    private String name;

    private String website;

    private String facebook;

    private String location;

    private List<RecruitmentDto> recruitments;

    private List<SubCatalogDto> subCatalogs;

    private UserDto user;

    private Integer employeeQuantity;

    private OvertimeDto overtime;

    private CountryDto country;

    private TypeDto type;

    private DayOfWeekDto workStartDate;

    private DayOfWeekDto workEndDate;

    public static class OvertimeDto extends MultilingualDto{ }

    @Getter
    @Setter
    public static class CountryDto extends MultilingualDto{

        private String flagImg;
    }

    public static class TypeDto extends MultilingualDto{ }

    public static class DayOfWeekDto extends MultilingualDto{ }
}
