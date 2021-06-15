package tht.closure.operator.service;

import tht.closure.operator.model.dto.RecruitmentDto;

import java.util.List;

public interface RecruitmentService {
    List<RecruitmentDto> searchRecruitments(String keyword);

    void createNewRecruitment(RecruitmentDto recruitmentDto);

    void updateRecruitment(RecruitmentDto recruitmentDto);
}
