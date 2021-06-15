package tht.closure.operator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tht.closure.operator.model.dto.CandidateDto;
import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.model.dto.UserDto;
import tht.closure.operator.model.entity.User;
import tht.closure.operator.service.AuthService;
import tht.closure.operator.service.CandidateService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/candidate")
public class CandidateController {

    @Autowired
    private AuthService authService;

    @Autowired
    private CandidateService candidateService;

    @PutMapping("/update")
    @PreAuthorize("hasRole('CAN')")
    public ResponseEntity<Object> updateCandidateInfo(@Valid @RequestBody CandidateDto candidateDto) {
        candidateService.updateCandidateInfo(candidateDto);
        return ResponseEntity.accepted().body("Update successfully");
    }

    @PostMapping("/add/apply-recruitment")
    @PreAuthorize("hasRole('CAN')")
    public ResponseEntity<Object> addRecruitmentToCandidateApplyList(@RequestBody Long recruitmentId) {
        candidateService.addRecruitmentToCandidateApplyList(new User(), recruitmentId);
        return ResponseEntity.accepted().body("Accept");
    }

    @PostMapping("/add/favorite-recruitment")
    @PreAuthorize("hasRole('CAN')")
    public ResponseEntity<Object> addRecruitmentToCandidateFavoriteList(@RequestBody Long recruitmentId) {
        candidateService.addRecruitmentToCandidateFavoriteList(new User(), recruitmentId);
        return ResponseEntity.accepted().body("Accept");
    }

    @PutMapping("/update/apply-recruitment")
    @PreAuthorize("hasRole('CAN')")
    public ResponseEntity<Object> updateRecruitmentStatusFromApplyListOfCandidate(@RequestParam String status, @RequestParam Long recruitmentId) {
        candidateService.updateRecruitmentStatusFromApplyListOfCandidate(new User(), recruitmentId, status);
        return ResponseEntity.accepted().body("Accept");
    }

    @DeleteMapping("/remove/saved-recruitment")
    @PreAuthorize("hasRole('CAN')")
    public ResponseEntity<Object> removeRecruitmentFromSavedListOfCandidate(@RequestParam List<Long> recruitmentIds) {
        candidateService.removeSavedRecruitmentOfCandidate(new User(), recruitmentIds);
        return ResponseEntity.accepted().body("Accept");
    }
}
