package tht.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;
import tht.closure.operator.model.dto.main.AbstractDto;
import tht.closure.operator.model.dto.main.MultilingualDto;

import java.net.MulticastSocket;

@Getter
@Setter
public class RecruitmentCandidateDto extends AbstractDto {

    private RecruitmentDto recruitment;

    private CandidateDto candidate;

    private StatusDto status;

    private TypeDto type;

    public static class StatusDto extends MultilingualDto {};

    public static class TypeDto  extends MultilingualDto{};
}
