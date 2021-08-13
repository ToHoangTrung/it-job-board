package tht.closure.operator.validator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Component;
import tht.closure.operator.model.entity.Candidate;
import tht.closure.operator.model.exception.candidate.CandidateNotFoundException;
import tht.closure.operator.repository.CandidateRepository;

@Component
public class CandidateValidator {

    @Autowired
    private CandidateRepository candidateRepository;

    public Candidate getCandidateIfExist(Long id) {
        Candidate candidate = candidateRepository.findById(id).orElse(null);
        if (candidate == null) {
            throw new CandidateNotFoundException(String.format("" +
                    "Candidate with id %s does not found", id));
        }
        return candidate;
    }
}
