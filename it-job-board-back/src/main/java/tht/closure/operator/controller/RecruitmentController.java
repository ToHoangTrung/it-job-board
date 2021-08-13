package tht.closure.operator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tht.closure.operator.model.dto.CandidateDto;
import tht.closure.operator.model.dto.RecruitmentApplyDto;
import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.model.dto.UserDto;
import tht.closure.operator.service.AuthService;
import tht.closure.operator.service.CandidateService;
import tht.closure.operator.service.main.PageResult;
import tht.closure.operator.service.RecruitmentService;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/recruitment")
public class RecruitmentController {

    @Autowired
    private RecruitmentService recruitmentService;

    @Autowired
    private CandidateService candidateService;

    @Autowired
    private AuthService authService;

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

    @PostMapping("/add/apply-recruitment")
    public ResponseEntity<Object> addRecruitmentToCandidateApplyList(@Valid @RequestBody RecruitmentApplyDto recruitmentApplyDto, HttpServletRequest request) throws Exception {
        UserDto user = authService.getUserInfoFromJwt(request);
        if (user == null && recruitmentApplyDto.getCandidateId() == null) {
            recruitmentService.addGuestToRecruitmentApplyList(recruitmentApplyDto);
        }
        if (user != null && recruitmentApplyDto.getCandidateId() != null) {
            CandidateDto candidate = candidateService.getCandidateFromUserId(user.getId());
            if (!candidate.getId().equals(recruitmentApplyDto.getCandidateId())) {
                throw new Exception("Recruitment Apply Form does not acceptable");
            } else {
                recruitmentService.addCandidateToRecruitmentApplyList(recruitmentApplyDto, candidate);
            }
        }
        return ResponseEntity.accepted().body("Add recruitment to candidate apply list successfully");
    }

    @PostMapping("/create-new")
    @PreAuthorize("hasRole('REC')")
    public ResponseEntity<Object> createNewRecruitment(@Valid @RequestBody RecruitmentDto recruitmentDto) {
        recruitmentService.createNewRecruitment(recruitmentDto);
        return ResponseEntity.accepted().body("Create new Recruitment Successfully");
    }
}
