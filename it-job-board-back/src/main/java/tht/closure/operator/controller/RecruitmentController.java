package tht.closure.operator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.service.RecruitmentService;

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
}
