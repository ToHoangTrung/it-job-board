package tht.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class RecruiterDto extends AbstractDto{

    private String name;

    private String website;

    private String facebook;

    private String location;

    private String type;

    private String city;

    private List<RecruitmentDto> recruitments;

    private UserDto user;
}
