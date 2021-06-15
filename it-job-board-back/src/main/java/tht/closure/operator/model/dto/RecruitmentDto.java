package tht.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class RecruitmentDto extends AbstractDto{

    @NotNull(message = "Headline can not be blank")
    private String headline;

    @NotNull(message = "Responsibility can not be blank")
    private String responsibilityContentUrl;

    @NotNull(message = "Requirement can not be blank")
    private String requirementContentUrl;

    @NotNull(message = "Benefit can not be blank")
    private String benefitContentUrl;

    @NotNull(message = "Start Date can not be blank")
    private LocalDate startDate;

    @NotNull(message = "End Date can not be blank")
    private LocalDate endDate;

    private Integer recruitQuantity;

    @NotNull(message = "Salary can not be blank")
    private String salary;

    private String location;

    private List<SubCatalogDto> subCatalogs = new ArrayList<>();

    @NotNull(message = "Recruiter can not be blank")
    private RecruiterDto recruiter;

    private PositionDto position;

    public static class PositionDto extends MultilingualDto{}
}
