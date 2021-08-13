package tht.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RecruitmentApplyDto {

    private Long candidateId;

    private Long recruitmentId;

    private String name;

    private String email;

    private String phone;

    private String cvUrl;

    private String description;

}
