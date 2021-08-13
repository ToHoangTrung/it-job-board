package tht.closure.operator.util;

import org.hibernate.Hibernate;
import org.hibernate.engine.spi.SessionImplementor;
import tht.closure.operator.model.dto.RecruiterDto;
import tht.closure.operator.model.dto.RecruitmentCandidateDto;
import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.model.dto.SubCatalogDto;
import tht.closure.operator.model.entity.Recruitment;
import tht.closure.operator.model.entity.RecruitmentCandidate;
import tht.closure.operator.model.entity.RecruitmentSubCatalog;
import tht.closure.operator.model.entity.SubCatalog;
import tht.closure.operator.model.exception.config.ItJobBoardExceptionErrorCode;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;
import java.util.stream.Collectors;

public class RecruitmentMapper {

    public static RecruitmentDto.PositionDto recruitmentPositionToRecruitmentPositionDto(Recruitment.Position entity) {
        RecruitmentDto.PositionDto dto = new RecruitmentDto.PositionDto();
        dto.setName(entity.name());
        dto.setEnTranslate(entity.enTranslate);
        dto.setVnTranslate(entity.vnTranslate);
        return dto;
    }

    public static RecruitmentCandidateDto.StatusDto recruitmentCandidateStatusToRecruitmentCandidateStatusDto(RecruitmentCandidate.Status entity) {
        RecruitmentCandidateDto.StatusDto dto = new RecruitmentCandidateDto.StatusDto();
        dto.setEnTranslate(entity.enTranslate);
        dto.setVnTranslate(entity.vnTranslate);
        dto.setName(entity.name());
        return dto;
    }

    public static RecruitmentCandidateDto.TypeDto recruitmentCandidateTypeToRecruitmentCandidateTypeDto(RecruitmentCandidate.Type entity) {
        RecruitmentCandidateDto.TypeDto dto = new RecruitmentCandidateDto.TypeDto();
        dto.setEnTranslate(entity.enTranslate);
        dto.setVnTranslate(entity.vnTranslate);
        dto.setName(entity.name());
        return dto;
    }

    public static RecruitmentDto recruitmentToRecruitmentDtoNR(Recruitment entity) {
        RecruitmentDto dto = new RecruitmentDto();
        dto.setId(entity.getId());
        dto.setHeadline(entity.getHeadline());
        dto.setRequirementContentUrl(entity.getRequirementContentUrl());
        dto.setSalaryMin(entity.getSalaryMin());
        dto.setSalaryMax(entity.getSalaryMax());
        dto.setStartDate(entity.getStartDate());
        dto.setEndDate(entity.getEndDate());
        dto.setLocation(entity.getLocation());
        dto.setVersion(entity.getVersion());
        dto.setPosition(recruitmentPositionToRecruitmentPositionDto(entity.getPosition()));
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

    public static List<SubCatalog> getSubCatalogsFromRecruitment(Recruitment entity) {
        return entity.getRecruitmentSubCatalogs().stream().map(RecruitmentSubCatalog::getSubCatalog).collect(Collectors.toList());
    }

    public static Recruitment recruitmentDtoToRecruitment(RecruitmentDto dto) {
        Recruitment entity = new Recruitment();
        entity.setId(dto.getId());
        entity.setHeadline(dto.getHeadline());
        entity.setRequirementContentUrl(dto.getRequirementContentUrl());
        entity.setSalaryMin(dto.getSalaryMin());
        entity.setSalaryMax(dto.getSalaryMax());
        entity.setStartDate(dto.getStartDate());
        entity.setEndDate(dto.getEndDate());
        entity.setLocation(dto.getLocation());
        entity.setPosition(Recruitment.Position.valueOf(dto.getPosition().getName()));
        return entity;
    }

}
