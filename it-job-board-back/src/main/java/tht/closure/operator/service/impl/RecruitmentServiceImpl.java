package tht.closure.operator.service.impl;

import com.querydsl.core.types.dsl.BooleanExpression;
import net.bytebuddy.asm.Advice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tht.closure.operator.model.dto.CandidateDto;
import tht.closure.operator.model.dto.RecruitmentApplyDto;
import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.model.dto.SubCatalogDto;
import tht.closure.operator.model.entity.Candidate;
import tht.closure.operator.model.entity.Recruitment;
import tht.closure.operator.model.entity.RecruitmentCandidate;
import tht.closure.operator.model.entity.RecruitmentSubCatalog;
import tht.closure.operator.predicate.recruitment.RecruitmentPredicatesBuilder;
import tht.closure.operator.repository.RecruitmentRepository;
import tht.closure.operator.service.RecruitmentService;
import tht.closure.operator.service.main.PageResult;
import tht.closure.operator.service.main.impl.PagePagingImp;
import tht.closure.operator.service.main.impl.PageResultImpl;
import tht.closure.operator.util.CandidateMapper;
import tht.closure.operator.util.RecruitmentMapper;
import tht.closure.operator.validator.CatalogValidator;
import tht.closure.operator.validator.RecruiterValidator;
import tht.closure.operator.validator.RecruitmentValidator;

import javax.transaction.Transactional;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
@Transactional
public class RecruitmentServiceImpl implements RecruitmentService {

    @Autowired
    private RecruitmentRepository recruitmentRepository;

    @Autowired
    private RecruitmentValidator recruitmentValidator;

    @Autowired
    private CatalogValidator catalogValidator;

    @Autowired
    private RecruiterValidator recruiterValidator;

    @Override
    public PageResult<RecruitmentDto> searchRecruitments(String keyword, Long page) {
        BooleanExpression exp = createBooleanExpressionFromParam(keyword);
        PageResult<Recruitment> pageResult = recruitmentRepository.searchRecruitment(exp, new PagePagingImp(5,page * 5));
        return new PageResultImpl<>(
                pageResult.getContent().stream().map(RecruitmentMapper::recruitmentToRecruitmentDto).collect(Collectors.toList()),
                pageResult.getTotalElements(),
                new PagePagingImp(5,page * 5));
    }

    @Override
    public List<RecruitmentDto.PositionDto> getAllRecruitmentPosition() {
        List<RecruitmentDto.PositionDto> positions = new ArrayList<>();
        Arrays.stream(Recruitment.Position.values()).map(position -> {
            RecruitmentDto.PositionDto positionDto = new RecruitmentDto.PositionDto();
            positionDto.setName(position.name());
            positionDto.setEnTranslate(position.enTranslate);
            positionDto.setVnTranslate(position.vnTranslate);
            return positionDto;
        }).forEachOrdered(positions::add);
        return positions;
    }

    @Override
    public void addGuestToRecruitmentApplyList(RecruitmentApplyDto recruitmentApplyDto) {
        Recruitment recruitment = recruitmentValidator.getRecruitmentIfExist(recruitmentApplyDto.getRecruitmentId());

        RecruitmentCandidate recruitmentCandidate = new RecruitmentCandidate();
        recruitmentCandidate.setGuestCvUrl(recruitmentApplyDto.getCvUrl());
        recruitmentCandidate.setGuestEmail(recruitmentApplyDto.getEmail());
        recruitmentCandidate.setGuestName(recruitmentApplyDto.getName());
        recruitmentCandidate.setType(RecruitmentCandidate.Type.APPLY);
        recruitmentCandidate.setStatus(RecruitmentCandidate.Status.NEW);
        recruitmentCandidate.setRecruitment(recruitment);
        recruitment.getRecruitmentCandidates().add(recruitmentCandidate);
    }

    @Override
    public void addCandidateToRecruitmentApplyList(RecruitmentApplyDto recruitmentApplyDto, CandidateDto candidateDto) throws Exception {
        Recruitment recruitment = recruitmentValidator.getRecruitmentIfExist(recruitmentApplyDto.getRecruitmentId());
        Candidate candidate = CandidateMapper.candidateDtoToCandidate(candidateDto);
        if (!candidate.getId().equals(recruitmentApplyDto.getCandidateId())) {
            throw new Exception("Recruitment Apply Form does not acceptable");
        }
        RecruitmentCandidate recruitmentCandidate = new RecruitmentCandidate();
        recruitmentCandidate.setCandidate(candidate);
        recruitmentCandidate.setRecruitment(recruitment);
        recruitment.getRecruitmentCandidates().add(recruitmentCandidate);
        recruitmentRepository.save(recruitment);
    }

    @Override
    public void createNewRecruitment(RecruitmentDto recruitmentDto) {
        recruitmentValidator.validateNewRecruitment(recruitmentDto);
        Recruitment newRecruitment = RecruitmentMapper.recruitmentDtoToRecruitment(recruitmentDto);
        Set<RecruitmentSubCatalog> recruitmentSubCatalogs = new HashSet<>();
        for (long id : recruitmentDto.getSubCatalogs().stream().map(SubCatalogDto::getId).collect(Collectors.toList())) {
            RecruitmentSubCatalog recruitmentSubCatalog = new RecruitmentSubCatalog();
            recruitmentSubCatalog.setRecruitment(newRecruitment);
            recruitmentSubCatalog.setSubCatalog(catalogValidator.getSubCatalogIfExist(id));
            recruitmentSubCatalogs.add(recruitmentSubCatalog);
        }
        newRecruitment.setRecruitmentSubCatalogs(recruitmentSubCatalogs);
        newRecruitment.setRecruiter(recruiterValidator.getRecruiterIfExist(recruitmentDto.getRecruiter().getId()));
        recruitmentRepository.save(newRecruitment);
    }

    private BooleanExpression createBooleanExpressionFromParam(String keyword) {
        RecruitmentPredicatesBuilder builder = new RecruitmentPredicatesBuilder();
        if (keyword != null) {
            Pattern pattern = Pattern.compile("(\\w+?)(:|<|>)(\\w+?),");
            Matcher matcher = pattern.matcher(keyword + ",");
            while (matcher.find()) {
                builder.with(matcher.group(1), matcher.group(2), matcher.group(3));
            }
        }
        return builder.build();
    }
}
