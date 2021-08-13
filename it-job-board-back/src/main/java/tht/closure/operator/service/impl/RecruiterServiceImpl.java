package tht.closure.operator.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tht.closure.operator.model.dto.RecruiterDto;
import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.model.entity.Recruiter;
import tht.closure.operator.repository.RecruiterRepository;
import tht.closure.operator.service.RecruiterService;
import tht.closure.operator.util.RecruiterMapper;
import tht.closure.operator.util.RecruitmentMapper;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class RecruiterServiceImpl implements RecruiterService {

    @Autowired
    private RecruiterRepository recruiterRepository;

    @Override
    public RecruiterDto getOneRecruiter(Long id) {
        Recruiter recruiter = recruiterRepository.getOneRecruiter(id);
        RecruiterDto recruiterDto = RecruiterMapper.recruiterToRecruiterDto(recruiter);
        List<RecruitmentDto> recruitmentDtos = recruiter.getRecruitments().stream().map(RecruitmentMapper::recruitmentToRecruitmentDto)
                .collect(Collectors.toList());
        recruiterDto.setRecruitments(recruitmentDtos);
        return recruiterDto;
    }

}
