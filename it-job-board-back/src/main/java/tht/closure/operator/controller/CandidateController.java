package tht.closure.operator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tht.closure.operator.model.dto.*;
import tht.closure.operator.model.entity.User;
import tht.closure.operator.service.AuthService;
import tht.closure.operator.service.CandidateService;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/candidate")
public class CandidateController {

    @Autowired
    private AuthService authService;

    @Autowired
    private CandidateService candidateService;

    @GetMapping("/get-all/apply-or-favorite/current-user/saved-recruitment")
    @PreAuthorize("hasRole('CAN')")
    public ResponseEntity<Object> getAllApplyOrFavoriteRecruitmentOfCandidate(HttpServletRequest request) {
        CandidateDto candidateDto = authService.getCandidateFromJwt(request);
        List<RecruitmentCandidateDto> recruitmentCandidates = candidateService.getAllApplyOrFavoriteRecruitmentOfCandidate(candidateDto);
        return ResponseEntity.accepted().body(recruitmentCandidates);
    }

    @PostMapping("/add-one/favorite/current-user/saved-recruitment")
    @PreAuthorize("hasRole('CAN')")
    public ResponseEntity<Object> addOneCurrentUserFavoriteRecruitment(@RequestBody Long recruitmentId, HttpServletRequest request) {
        CandidateDto candidateDto = authService.getCandidateFromJwt(request);
        candidateService.addOneCandidateFavoriteRecruitment(candidateDto, recruitmentId);
        return ResponseEntity.accepted().body("Add Successfully");
    }

    @DeleteMapping("/remove/favorite/current-user/saved-recruitment")
    @PreAuthorize("hasRole('CAN')")
    public ResponseEntity<Object> removeCurrentUserFavoriteRecruitment(@RequestBody Long recruitmentId, HttpServletRequest request) {
        CandidateDto candidateDto = authService.getCandidateFromJwt(request);
        candidateService.removeCandidateFavoriteRecruitment(candidateDto, recruitmentId);
        return ResponseEntity.accepted().body("Remove Successfully");
    }
}
