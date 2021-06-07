package tht.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CandidateDto extends AbstractDto{

    private String firstName;

    private String lastName;

    private String cvUrl;

    private String description;

    private UserDto user;

    private List<RecruitmentDto> recruitments = new ArrayList<>();
}
