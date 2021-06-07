package tht.closure.operator.util;

import tht.closure.operator.model.dto.CandidateDto;
import tht.closure.operator.model.entity.Candidate;

public class CandidateMapper {

    public static CandidateDto candidateToCandidateDtoNoRelationShip(Candidate entity) {
        CandidateDto dto = new CandidateDto();
        dto.setId(entity.getId());
        dto.setFirstName(entity.getFirstName());
        dto.setLastName(entity.getLastName());
        dto.setDescription(entity.getDescription());
        dto.setCvUrl(entity.getCvUrl());
        dto.setVersion(entity.getVersion());
        return dto;
    }

    public static CandidateDto candidateToCandidateDto(Candidate entity) {
        CandidateDto dto = candidateToCandidateDtoNoRelationShip(entity);
        dto.setUser(UserMapper.userToUserDtoNoRelationShip(entity.getUser()));
        return dto;
    }

    public static Candidate candidateDtoToCandidate(CandidateDto dto) {
        Candidate entity = new Candidate();
        entity.setId(dto.getId());
        entity.setDescription(dto.getDescription());
        entity.setCvUrl(dto.getCvUrl());
        entity.setFirstName(dto.getFirstName());
        entity.setLastName(dto.getLastName());
        entity.setVersion(dto.getVersion());
        entity.setUser(UserMapper.userDtoToUser(dto.getUser()));
        return entity;
    }
}
