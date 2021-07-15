package tht.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;
import tht.closure.operator.model.dto.main.AbstractDto;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
public class CandidateDto extends AbstractDto {

    private String firstName;

    private String lastName;

    private String cvUrl;

    private String description;

    private Set<RecruitmentDto> recruitments = new LinkedHashSet<>();
}
