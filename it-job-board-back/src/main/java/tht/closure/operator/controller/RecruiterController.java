package tht.closure.operator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import tht.closure.operator.model.dto.CandidateDto;
import tht.closure.operator.model.dto.RecruiterDto;
import tht.closure.operator.service.RecruiterService;

import javax.validation.Valid;
import java.util.Set;

@RestController
@RequestMapping("/api/recruiter")
public class RecruiterController {

    @Autowired
    private RecruiterService recruiterService;

    @PutMapping("/update")
    @PreAuthorize("hasRole('REC')")
    public ResponseEntity<Object> updateRecruiterInfo(@Valid @RequestBody RecruiterDto recruiterDto) {
        recruiterService.updateRecruiterInfo(recruiterDto);
        return ResponseEntity.accepted().body("Update successfully");
    }

    @GetMapping("/search")
    public ResponseEntity<Object> searchRecruiters(@RequestParam String keyword) {
        Set<RecruiterDto> recruiters = recruiterService.searchRecruiters(keyword);
        return ResponseEntity.accepted().body(recruiters);
    }
}
