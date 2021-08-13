package tht.closure.operator.util;

import org.springframework.util.CollectionUtils;
import tht.closure.operator.model.dto.RecruiterDto;
import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.model.entity.*;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class RecruiterMapper {

    public static RecruiterDto.OvertimeDto recruiterOverTimeToRecruiterOverTimeDto(Recruiter.Overtime entity) {
        RecruiterDto.OvertimeDto dto = new RecruiterDto.OvertimeDto();
        dto.setName(entity.name());
        dto.setEnTranslate(entity.enTranslate);
        dto.setVnTranslate(entity.vnTranslate);
        return dto;
    }

    public static RecruiterDto.DayOfWeekDto recruiterDayOfWeekToRecruiterDayOfWeekDto(Recruiter.DayOfWeek entity) {
        RecruiterDto.DayOfWeekDto dto = new RecruiterDto.DayOfWeekDto();
        dto.setName(entity.name());
        dto.setEnTranslate(entity.enTranslate);
        dto.setVnTranslate(entity.vnTranslate);
        return dto;
    }

    public static RecruiterDto.TypeDto recruiterTypeToRecruiterTypeDto(Recruiter.Type entity) {
        RecruiterDto.TypeDto dto = new RecruiterDto.TypeDto();
        dto.setName(entity.name());
        dto.setEnTranslate(entity.enTranslate);
        dto.setVnTranslate(entity.vnTranslate);
        return dto;
    }

    public static RecruiterDto.CountryDto recruiterCountryToRecruiterCountryDto(Recruiter.Country entity) {
        RecruiterDto.CountryDto dto = new RecruiterDto.CountryDto();
        dto.setName(entity.name());
        dto.setEnTranslate(entity.enTranslate);
        dto.setVnTranslate(entity.vnTranslate);
        dto.setFlagImg(entity.flagImage);
        return dto;
    }

    public static RecruiterDto recruiterToRecruiterDtoNR(Recruiter entity) {
        RecruiterDto dto = new RecruiterDto();
        dto.setId(entity.getId());
        dto.setFacebook(entity.getFacebook());
        dto.setWebsite(entity.getWebsite());
        dto.setLocation(entity.getLocation());
        dto.setName(entity.getName());
        dto.setVersion(entity.getVersion());
        dto.setEmployeeQuantityMin(entity.getEmployeeQuantityMin());
        dto.setEmployeeQuantityMax(entity.getEmployeeQuantityMax());
        dto.setWebsite(entity.getWebsite());
        dto.setOverviewContentUrl(entity.getOverviewContentUrl());
        dto.setAdvertiseContentUrl(entity.getAdvertiseContentUrl());
        dto.setOvertime(recruiterOverTimeToRecruiterOverTimeDto(entity.getOvertime()));
        dto.setWorkStartDate(recruiterDayOfWeekToRecruiterDayOfWeekDto(entity.getWorkStartDay()));
        dto.setWorkEndDate(recruiterDayOfWeekToRecruiterDayOfWeekDto(entity.getWorkEndDay()));
        dto.setType(recruiterTypeToRecruiterTypeDto(entity.getType()));
        dto.setCountry(recruiterCountryToRecruiterCountryDto(entity.getCountry()));
        return dto;
    }

    public static RecruiterDto recruiterToRecruiterDto(Recruiter entity) {
        RecruiterDto dto = recruiterToRecruiterDtoNR(entity);
        if (entity.getRecruiterSubCatalogs() != null) {
            List<SubCatalog> subCatalogs = getSubCatalogsFromRecruiter(entity);
            dto.setSubCatalogs(subCatalogs.stream().map(CatalogMapper::subCatalogToSubCatalogDto).collect(Collectors.toList()));
        }
        if (entity.getUser() != null) {
            dto.setAvatarUrl(entity.getUser().getAvatarUrl());
        }
        return dto;
    }

    public static List<SubCatalog> getSubCatalogsFromRecruiter(Recruiter entity) {
        return entity.getRecruiterSubCatalogs().stream().map(RecruiterSubCatalog::getSubCatalog).collect(Collectors.toList());
    }

    public static Recruiter recruiterDtoToRecruiter(RecruiterDto dto) {
        Recruiter entity = new Recruiter();
        entity.setId(dto.getId());
        entity.setFacebook(dto.getFacebook());
        entity.setLocation(dto.getLocation());
        entity.setName(dto.getName());
        entity.setWebsite(dto.getWebsite());
        entity.setFacebook(dto.getFacebook());
        entity.setVersion(dto.getVersion());
        return entity;
    }
}
