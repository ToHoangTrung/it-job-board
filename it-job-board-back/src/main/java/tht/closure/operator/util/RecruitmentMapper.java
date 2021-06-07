package tht.closure.operator.util;

import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.model.entity.Recruitment;
import tht.closure.operator.model.entity.RecruitmentSubCatalog;
import tht.closure.operator.model.entity.SubCatalog;

import java.util.List;
import java.util.stream.Collectors;

public class RecruitmentMapper {

    public static RecruitmentDto recruitmentToRecruitmentDtoNoRelationShip(Recruitment entity) {
        RecruitmentDto dto = new RecruitmentDto();
        dto.setId(entity.getId());
        dto.setHeadline(entity.getHeadline());
        dto.setBenefitContentUrl(entity.getBenefitContentUrl());
        dto.setOverviewContentUrl(entity.getOverviewContentUrl());
        dto.setRequirementContentUrl(entity.getRequirementContentUrl());
        dto.setResponsibilityContentUrl(entity.getResponsibilityContentUrl());
        dto.setSalary(entity.getSalary());
        dto.setStartDate(entity.getStartDate());
        dto.setEndDate(entity.getEndDate());
        dto.setType(entity.getType().label);
        dto.setRecruitQuantity(entity.getRecruitQuantity());
        dto.setVersion(entity.getVersion());
        return dto;
    }

    public static RecruitmentDto recruitmentToRecruitmentDto(Recruitment entity) {
        RecruitmentDto dto = recruitmentToRecruitmentDtoNoRelationShip(entity);
        dto.setRecruiter(RecruiterMapper.recruiterToRecruiterDtoNoRelationSHip(entity.getRecruiter()));
        List<SubCatalog> subCatalogs = getSubCatalogsFromRecruitment(entity);
        dto.setSubCatalogs(subCatalogs.stream().map(CatalogMapper::subCatalogToSubCatalogDto).collect(Collectors.toList()));
        return dto;
    }

    public static List<SubCatalog> getSubCatalogsFromRecruitment(Recruitment entity) {
        return entity.getRecruitmentSubCatalogs().stream().map(RecruitmentSubCatalog::getSubCatalog).collect(Collectors.toList());
    }

}
