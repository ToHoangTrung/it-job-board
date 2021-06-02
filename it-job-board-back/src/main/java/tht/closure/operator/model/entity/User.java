package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Entity(name = "t_user")
@Getter
@Setter
public class User extends AbstractEntity{

    @Column
    private String username;

    @Column
    private String password;

    @Column
    private String email;

    @Column
    private String avatarUrl;

    @Column
    private String phone;

    @CreationTimestamp
    @Column
    private LocalDate createdDate;

    @UpdateTimestamp
    @Column
    private LocalDate updatedDate;

    @Enumerated(EnumType.STRING)
    @Column
    private Role role;

    public User(String username, String email, String password, String role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = User.Role.valueOf(role);
    }

    public User() {

    }

    public enum Role {
        CAN("Candidate"),
        REC("Recruiter"),
        ADM("Admin");

        public final String label;

        Role(String label) {
            this.label = label;
        }

        public static List<String> getUserRoles() {
            return Stream.of(Role.values()).map(Role::name).collect(Collectors.toList());
        }
    }

}
