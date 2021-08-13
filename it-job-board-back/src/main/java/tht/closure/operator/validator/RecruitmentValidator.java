package tht.closure.operator.validator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import tht.closure.operator.model.dto.RecruitmentDto;
import tht.closure.operator.model.dto.SubCatalogDto;
import tht.closure.operator.model.entity.Candidate;
import tht.closure.operator.model.entity.RecruitmentCandidate;
import tht.closure.operator.model.entity.Recruitment;
import tht.closure.operator.model.entity.User;
import tht.closure.operator.model.exception.recruitment.RecruitmentApplyStatusNotSupportException;
import tht.closure.operator.model.exception.recruitment.RecruitmentNotFoundException;
import tht.closure.operator.model.exception.recruitment.RecruitmentPositionNotSupportException;
import tht.closure.operator.model.exception.user.RoleNotSupportException;
import tht.closure.operator.repository.RecruitmentRepository;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class RecruitmentValidator {

    @Autowired
    private RecruitmentRepository recruitmentRepository;

    @Autowired
    private CatalogValidator catalogValidator;


    public void validateRecruitmentIdExist(Long id) {
        boolean recruitment = recruitmentRepository.existsById(id);
        if (!recruitment) {
            throw new RecruitmentNotFoundException(String.format("Recruitment with id: %s does not found", id));
        }
    }

    public void validateRecruitmentExistInCandidateRecruitment(Candidate candidate, Long recruitmentId) {
        Optional<RecruitmentCandidate> candidateRecruitment  = candidate.getRecruitmentCandidates()
                .stream().filter(candidateRecruitment1 -> candidateRecruitment1.getRecruitment().getId().equals(recruitmentId))
                .findFirst();
        if (!candidateRecruitment.isPresent()) {
            throw new RecruitmentNotFoundException(
                    String.format("Recruitment with id: %s does not exist in this candidate recruitment apply list", recruitmentId)
            );
        }
    }

    public Recruitment getRecruitmentIfExist(Long id) {
        return recruitmentRepository.findById(id).orElseThrow(() ->
                new RecruitmentNotFoundException(String.format("Recruitment with id: %s does not found", id))
        );
    }

    public void validateApplyRecruitmentStatusValid(String status) {
        Set<String> applyRecruitmentStatusList = RecruitmentCandidate.Status.getAllApplyRecruitmentStatus();
        if (!applyRecruitmentStatusList.contains(status)) {
            throw new RecruitmentApplyStatusNotSupportException(
                    String.format("Recruitment does not support this apply status: %s", status)
            );
        }
    }

    public void validatePositionValid(String position) {
        List<String> positions = Recruitment.getAllRecruitmentPosition();
        if (!positions.contains(position)) {
            throw new RecruitmentPositionNotSupportException(String.format("This recruitment does not support this position: %s", position));
        }
    }

    public Set<Recruitment> getRecruitmentsIfExist(List<Long> ids) {
        Set<Long> invalidIds = new LinkedHashSet<>();
        Set<Recruitment> recruitments = new LinkedHashSet<>();
        ids.forEach(id -> {
            try {
                recruitments.add(getRecruitmentIfExist(id));
            } catch (RecruitmentNotFoundException e) {
                invalidIds.add(id);
            }
        });
        if (invalidIds.isEmpty()) {
            return recruitments;
        } else {
            throw new RecruitmentNotFoundException(String.format("The following recruitment with ids does not exist: %s", invalidIds));
        }
    }

    public void validateNewRecruitment(RecruitmentDto recruitmentDto) {
        validatePositionValid(recruitmentDto.getPosition().getName());
        catalogValidator.validateSubCatalogsExist(recruitmentDto.getSubCatalogs().stream().map(SubCatalogDto::getId).collect(Collectors.toList()));
    }
}
