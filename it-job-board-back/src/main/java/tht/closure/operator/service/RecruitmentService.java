package tht.closure.operator.service;

import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.service.main.PageResult;

import java.util.List;

public interface RecruitmentService {
    PageResult<RecruitmentDto> searchRecruitments(String keyword, Long page);

    void createNewRecruitment(RecruitmentDto recruitmentDto);

    void updateRecruitment(RecruitmentDto recruitmentDto);

    List<RecruitmentDto.PositionDto> getAllRecruitmentPosition();

    List<RecruitmentDto.ExperienceDto> getAllRecruitmentExperence();

    List<RecruitmentDto.CityDto> getAllRecruitmentCity();
}
