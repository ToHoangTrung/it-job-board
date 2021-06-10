package tht.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class RecruitmentDto extends AbstractDto{

    private String headline;

    private String responsibilityContentUrl;

    private String requirementContentUrl;

    private String benefitContentUrl;

    private LocalDate startDate;

    private LocalDate endDate;

    private Integer recruitQuantity;

    private String salary;

    private String location;

    private List<SubCatalogDto> subCatalogs = new ArrayList<>();

    private RecruiterDto recruiter;

    private PositionDto position;

    public static class PositionDto extends MultilingualDto{}
}
