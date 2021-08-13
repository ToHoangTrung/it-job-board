package tht.closure.operator.service;

import tht.closure.operator.model.dto.CandidateDto;
import tht.closure.operator.model.dto.RecruitmentApplyDto;
import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.model.entity.Candidate;
import tht.closure.operator.service.main.PageResult;

import java.util.List;

public interface RecruitmentService {

    PageResult<RecruitmentDto> searchRecruitments(String keyword, Long page);

    List<RecruitmentDto.PositionDto> getAllRecruitmentPosition();

    void addGuestToRecruitmentApplyList(RecruitmentApplyDto recruitmentApplyDto);

    void addCandidateToRecruitmentApplyList(RecruitmentApplyDto recruitmentApplyDto, CandidateDto candidateDto) throws Exception;

    void createNewRecruitment(RecruitmentDto recruitmentDto);
}
