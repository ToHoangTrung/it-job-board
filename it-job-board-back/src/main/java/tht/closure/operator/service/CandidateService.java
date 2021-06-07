package tht.closure.operator.service;

import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.model.dto.UserDto;

public interface CandidateService {
    void addRecruitmentToCandidateApplyList(UserDto userDto, RecruitmentDto recruitmentDto);
}
