package tht.closure.operator.model.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
public class UserDto extends AbstractDto{

    @NotNull(message = "Username can not be blank")
    private String username;

    @NotNull(message = "Email can not be blank")
    private String email;

    @NotNull(message = "Password can not be blank")
    private String password;

    @NotNull(message = "Phone can not be blank")
    private String phone;

    public UserDto(String username, String password, String email){
        this.username = username;
        this.password = password;
        this.email = email;
    }

    public UserDto(){

    }
}
