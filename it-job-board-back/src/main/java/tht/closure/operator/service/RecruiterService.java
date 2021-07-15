package tht.closure.operator.service;

import tht.closure.operator.model.dto.RecruiterDto;

import java.util.Set;

public interface RecruiterService {
    Set<RecruiterDto> searchRecruiters(String keyword);

    void updateRecruiterInfo(RecruiterDto recruiterDto);

    RecruiterDto getOneRecruiter(Long id);
}
