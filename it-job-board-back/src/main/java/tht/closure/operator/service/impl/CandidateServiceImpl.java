package tht.closure.operator.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.model.dto.UserDto;
import tht.closure.operator.repository.CandidateRepository;
import tht.closure.operator.service.CandidateService;

@Service
public class CandidateServiceImpl implements CandidateService {

    @Autowired
    private CandidateRepository candidateRepository;

    @Override
    public void addRecruitmentToCandidateApplyList(UserDto userDto, RecruitmentDto recruitmentDto) {

    }
}
