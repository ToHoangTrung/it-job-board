package tht.closure.operator.util;

import tht.closure.operator.model.dto.RecruiterDto;
import tht.closure.operator.model.entity.Recruiter;

public class RecruiterMapper {

    public static RecruiterDto recruiterToRecruiterDtoNoRelationSHip(Recruiter entity) {
        RecruiterDto dto = new RecruiterDto();
        dto.setId(entity.getId());
        dto.setFacebook(entity.getFacebook());
        dto.setLocation(entity.getLocation());
        dto.setName(entity.getName());
        dto.setType(entity.getType().label);
//        dto.setCity(entity.getCity().getName());
        dto.setWebsite(entity.getWebsite());
        dto.setFacebook(entity.getFacebook());
        dto.setVersion(entity.getVersion());
        return dto;
    }

    public static RecruiterDto recruiterToRecruiterDto(Recruiter entity) {
        RecruiterDto dto = new RecruiterDto();
        dto.setUser(UserMapper.userToUserDto(entity.getUser()));
        return dto;
    }

    public static Recruiter recruiterDtoToRecruiter(RecruiterDto dto) {
        Recruiter entity = new Recruiter();
        entity.setId(dto.getId());
        entity.setFacebook(dto.getFacebook());
        entity.setLocation(dto.getLocation());
        entity.setName(dto.getName());
        entity.setWebsite(dto.getWebsite());
        entity.setFacebook(dto.getFacebook());
        entity.setVersion(dto.getVersion());
        entity.setUser(UserMapper.userDtoToUser(dto.getUser()));
        return entity;
    }
}
