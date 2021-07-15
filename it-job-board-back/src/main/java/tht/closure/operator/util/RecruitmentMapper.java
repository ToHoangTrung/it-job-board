package tht.closure.operator.util;

import org.hibernate.Hibernate;
import org.hibernate.engine.spi.SessionImplementor;
import tht.closure.operator.model.dto.RecruiterDto;
import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.model.entity.Recruitment;
import tht.closure.operator.model.entity.RecruitmentSubCatalog;
import tht.closure.operator.model.entity.SubCatalog;
import tht.closure.operator.model.exception.config.ItJobBoardExceptionErrorCode;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.stream.Collectors;

public class RecruitmentMapper {

    @PersistenceContext(unitName = ItJobBoardExceptionErrorCode.CLOSURE_ENTITY_MANAGER_FACTORY)
    private static EntityManager entityManager;

    public static RecruitmentDto.PositionDto recruitmentPositionToRecruitmentPositionDto(Recruitment.Position entity) {
        RecruitmentDto.PositionDto dto = new RecruitmentDto.PositionDto();
        dto.setName(entity.name());
        dto.setEnTranslate(entity.enTranslate);
        dto.setVnTranslate(entity.vnTranslate);
        return dto;
    }

    public static RecruitmentDto.ExperienceDto recruitmentExperienceToRecruitmentExperienceDto(Recruitment.Experience entity) {
        RecruitmentDto.ExperienceDto dto = new RecruitmentDto.ExperienceDto();
        dto.setName(entity.name());
        dto.setEnTranslate(entity.enTranslate);
        dto.setVnTranslate(entity.vnTranslate);
        return dto;
    }

    public static RecruitmentDto.CityDto recruitmentCityToRecruitmentCityDto(Recruitment.City entity) {
        RecruitmentDto.CityDto dto = new RecruitmentDto.CityDto();
        dto.setName(entity.name());
        dto.setEnTranslate(entity.enTranslate);
        dto.setVnTranslate(entity.vnTranslate);
        return dto;
    }

    public static RecruitmentDto recruitmentToRecruitmentDtoNR(Recruitment entity) {
        RecruitmentDto dto = new RecruitmentDto();
        dto.setId(entity.getId());
        dto.setHeadline(entity.getHeadline());
        dto.setBenefitContentUrl(entity.getBenefitContentUrl());
        dto.setRequirementContentUrl(entity.getRequirementContentUrl());
        dto.setResponsibilityContentUrl(entity.getResponsibilityContentUrl());
        dto.setSalaryMin(entity.getSalaryMin());
        dto.setSalaryMax(entity.getSalaryMax());
        dto.setStartDate(entity.getStartDate());
        dto.setEndDate(entity.getEndDate());
        dto.setRecruitQuantity(entity.getRecruitQuantity());
        dto.setLocation(entity.getLocation());
        dto.setVersion(entity.getVersion());
        dto.setPosition(recruitmentPositionToRecruitmentPositionDto(entity.getPosition()));
        dto.setExperience(recruitmentExperienceToRecruitmentExperienceDto(entity.getExperience()));
        dto.setCity(recruitmentCityToRecruitmentCityDto(entity.getCity()));
        return dto;
    }

    public static RecruitmentDto recruitmentToRecruitmentDto(Recruitment entity) {
        RecruitmentDto dto = recruitmentToRecruitmentDtoNR(entity);
        if (entity.getRecruiter() != null) {
            dto.setRecruiter(RecruiterMapper.recruiterToRecruiterDto(entity.getRecruiter()));
        }
        if (entity.getRecruitmentSubCatalogs() != null) {
            List<SubCatalog> subCatalogs = getSubCatalogsFromRecruitment(entity);
            dto.setSubCatalogs(subCatalogs.stream().map(CatalogMapper::subCatalogToSubCatalogDto).collect(Collectors.toList()));
        }
        return dto;
    }

    public static RecruitmentDto recruitmentToRecruitmentDtoNoRecruiter(Recruitment entity) {
        RecruitmentDto dto = recruitmentToRecruitmentDtoNR(entity);
        if (entity.getRecruitmentSubCatalogs() != null) {
            List<SubCatalog> subCatalogs = getSubCatalogsFromRecruitment(entity);
            dto.setSubCatalogs(subCatalogs.stream().map(CatalogMapper::subCatalogToSubCatalogDto).collect(Collectors.toList()));
        }
        return dto;
    }

    public static List<SubCatalog> getSubCatalogsFromRecruitment(Recruitment entity) {
        return entity.getRecruitmentSubCatalogs().stream().map(RecruitmentSubCatalog::getSubCatalog).collect(Collectors.toList());
    }

}
