package tht.closure.operator.util;

import tht.closure.operator.model.dto.UserDto;
import tht.closure.operator.model.entity.User;

public class UserMapper {

    public static UserDto userToUserDtoNoRelationShip(User entity) {
        UserDto dto = new UserDto();
        dto.setId(entity.getId());
        dto.setEmail(entity.getEmail());
        dto.setUsername(entity.getUsername());
        dto.setPhone(entity.getPhone());
        dto.setVersion(entity.getVersion());
        return dto;
    }

    public static UserDto userToUserDto(User entity) {
        UserDto dto = userToUserDtoNoRelationShip(entity);
        return dto;
    }
    
    public static User userDtoToUser(UserDto dto) {
        User entity = new User();
        entity.setId(dto.getId());
        entity.setUsername(dto.getUsername());
        entity.setPhone(dto.getPhone());
        entity.setEmail(dto.getEmail());
        entity.setVersion(dto.getVersion());
        entity.setPassword(dto.getPassword());
        return entity;
    }
}
