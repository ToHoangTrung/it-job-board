package tht.closure.operator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.model.dto.UserDto;
import tht.closure.operator.service.AuthService;
import tht.closure.operator.service.CandidateService;

@RestController
@RequestMapping("/api/candidate")
public class CandidateController {

    @Autowired
    private AuthService authService;

    @Autowired
    private CandidateService candidateService;

    @GetMapping("/add/apply-recruitment")
    @PreAuthorize("hasRole('CAN')")
    public ResponseEntity<Object> addRecruitmentToCandidateApplyList(@RequestBody RecruitmentDto recruitmentDto) {
//        UserDto userDto = authService.getUserFromJwt();
//        candidateService.addRecruitmentToCandidateApplyList(userDto, recruitmentDto);
        return ResponseEntity.accepted().body("Accept");
    }
}
