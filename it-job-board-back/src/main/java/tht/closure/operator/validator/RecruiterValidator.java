package tht.closure.operator.validator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import tht.closure.operator.model.entity.Recruiter;
import tht.closure.operator.model.entity.SubCatalog;
import tht.closure.operator.model.exception.catalog.CatalogNotFoundException;
import tht.closure.operator.model.exception.recruiter.RecruiterNotFoundException;
import tht.closure.operator.repository.RecruiterRepository;

@Component
public class RecruiterValidator {

    @Autowired
    private RecruiterRepository recruiterRepository;

    public Recruiter getRecruiterIfExist(Long id) {
        Recruiter recruiter = recruiterRepository.findById(id).orElse(null);
        if (recruiter == null) {
            throw new RecruiterNotFoundException(String.format("" +
                    "Recruiter with id %s does not found", id));
        }
        return recruiter;
    }
}
