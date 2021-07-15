package tht.closure.operator.service.impl;

import com.querydsl.core.types.dsl.BooleanExpression;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.model.entity.*;
import tht.closure.operator.predicate.recruitment.RecruitmentPredicatesBuilder;
import tht.closure.operator.repository.RecruitmentRepository;
import tht.closure.operator.service.main.PageResult;
import tht.closure.operator.service.RecruitmentService;
import tht.closure.operator.service.main.impl.PagePagingImp;
import tht.closure.operator.service.main.impl.PageResultImpl;
import tht.closure.operator.util.RecruitmentMapper;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Service
@Transactional
public class RecruitmentServiceImpl implements RecruitmentService {

    @Autowired
    private RecruitmentRepository recruitmentRepository;

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
    public void createNewRecruitment(RecruitmentDto recruitmentDto) {

    }

    @Override
    public void updateRecruitment(RecruitmentDto recruitmentDto) {

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
    public List<RecruitmentDto.ExperienceDto> getAllRecruitmentExperence() {
        List<RecruitmentDto.ExperienceDto> experiences = new ArrayList<>();
        Arrays.stream(Recruitment.Experience.values()).map(position -> {
            RecruitmentDto.ExperienceDto experienceDto = new RecruitmentDto.ExperienceDto();
            experienceDto.setName(position.name());
            experienceDto.setEnTranslate(position.enTranslate);
            experienceDto.setVnTranslate(position.vnTranslate);
            return experienceDto;
        }).forEachOrdered(experiences::add);
        return experiences;
    }

    @Override
    public List<RecruitmentDto.CityDto> getAllRecruitmentCity() {
        List<RecruitmentDto.CityDto> cities = new ArrayList<>();
        Arrays.stream(Recruitment.City.values()).map(position -> {
            RecruitmentDto.CityDto cityDto = new RecruitmentDto.CityDto();
            cityDto.setName(position.name());
            cityDto.setEnTranslate(position.enTranslate);
            cityDto.setVnTranslate(position.vnTranslate);
            return cityDto;
        }).forEachOrdered(cities::add);
        return cities;
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
