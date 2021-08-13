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

    @GetMapping("/get-one/{id}")
    public ResponseEntity<Object> getOneRecruiter(@PathVariable Long id) {
        RecruiterDto recruiter = recruiterService.getOneRecruiter(id);
        return ResponseEntity.accepted().body(recruiter);
    }
}
