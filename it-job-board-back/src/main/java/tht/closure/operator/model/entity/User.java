package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Entity(name = "t_user")
@Getter
@Setter
public class User extends AbstractEntity {

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
        ROLE_CAN("Candidate", "Ứng Cử Viên"),
        ROLE_REC("Recruiter", "Nhà Tuyển Dụng"),
        ROLE_ADM("Admin", "Quản Trị Viên");

        public final String enTranslate;
        public final String vnTranslate;

        Role(String enTranslate, String vnTranslate) {
            this.enTranslate = enTranslate;
            this.vnTranslate = vnTranslate;
        }
    }

    public static List<String> getAllUserRole() {
        return Stream.of(User.Role.values()).map(User.Role::name).collect(Collectors.toList());
    }

}
