package tht.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
public class CandidateDto extends AbstractDto{

    private String firstName;

    private String lastName;

    private String cvUrl;

    private String description;

    private UserDto user;

    private Set<RecruitmentDto> recruitments = new LinkedHashSet<>();
}
