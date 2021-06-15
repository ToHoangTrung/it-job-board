package tht.closure.operator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.model.entity.Recruitment;
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
    public ResponseEntity<Object> searchRecruitments(@RequestParam String keyword) {
        List<RecruitmentDto> recruitments = recruitmentService.searchRecruitments(keyword);
        return ResponseEntity.accepted().body(recruitments);
    }

    @GetMapping("/position")
    public ResponseEntity<Object> getAllRecruitmentPosition() {
        List<RecruitmentDto.PositionDto> positions = new ArrayList<>();
        Arrays.stream(Recruitment.Position.values()).map(position -> {
            RecruitmentDto.PositionDto positionDto = new RecruitmentDto.PositionDto();
            positionDto.setName(position.name());
            positionDto.setEnTranslate(position.enTranslate);
            positionDto.setVnTranslate(position.vnTranslate);
            return positionDto;
        }).forEachOrdered(positions::add);
        return ResponseEntity.accepted().body(positions);
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
