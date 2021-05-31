package tht.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
public class UserDto extends AbstractDto{

    @NotNull
    private String username;

    @NotNull
    private String email;

    @NotNull
    private String password;

    private String phone;

    public UserDto(String username, String password, String email){
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public UserDto(){

    }
}
