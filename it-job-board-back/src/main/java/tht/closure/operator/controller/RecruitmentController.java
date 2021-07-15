package tht.closure.operator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.model.entity.Recruitment;
import tht.closure.operator.service.main.PageResult;
import tht.closure.operator.service.RecruitmentService;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/recruitment")
public class RecruitmentController {

    @Autowired
    private RecruitmentService recruitmentService;

    @GetMapping("/search")
    public ResponseEntity<Object> searchRecruitments(@RequestParam String keyword, @RequestParam Long page) {
        PageResult<RecruitmentDto> recruitments = recruitmentService.searchRecruitments(keyword, page - 1);
        return ResponseEntity.accepted().body(recruitments);
    }

    @GetMapping("/get-all-position-filter")
    public ResponseEntity<Object> getAllRecruitmentPosition() {
        List<RecruitmentDto.PositionDto> positions = recruitmentService.getAllRecruitmentPosition();
        return ResponseEntity.accepted().body(positions);
    }

    @GetMapping("/get-all-experience-filter")
    public ResponseEntity<Object> getAllRecruitmentExperence() {
        List<RecruitmentDto.ExperienceDto> experiences = recruitmentService.getAllRecruitmentExperence();
        return ResponseEntity.accepted().body(experiences);
    }

    @GetMapping("/get-all-city-filter")
    public ResponseEntity<Object> getAllRecruitmentCity() {
        List<RecruitmentDto.CityDto> cities = recruitmentService.getAllRecruitmentCity();
        return ResponseEntity.accepted().body(cities);
    }

    @PostMapping("/create")
    @PreAuthorize("hasRole('ROLE_REC')")
    public ResponseEntity<Object> createNewRecruitment(@Valid @RequestBody RecruitmentDto recruitmentDto) {
        recruitmentService.createNewRecruitment(recruitmentDto);
        return ResponseEntity.ok().body("Create successfully");
    }

    @PutMapping("/update")
    @PreAuthorize("hasRole('ROLE_REC')")
    public ResponseEntity<Object> updateRecruitment(@Valid @RequestBody RecruitmentDto recruitmentDto) {
        recruitmentService.updateRecruitment(recruitmentDto);
        return ResponseEntity.ok().body("Update successfully");
    }
}
