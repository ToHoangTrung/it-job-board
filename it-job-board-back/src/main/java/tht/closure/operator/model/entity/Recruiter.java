package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;

@Entity(name = "t_recruiter")
@Getter
@Setter
public class Recruiter extends AbstractEntity{

    @Column
    private String name;

    @Column
    private String websiteUrl;

    @Column
    private String facebookUrl;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @OneToMany(mappedBy = "recruiter")
    private List<Recruitment> recruitments;

    @Column
    @Enumerated(EnumType.STRING)
    private Type type;

    public enum Type {
        PRO("Product"),
        OUT("Outsource");

        public final String label;

        Type(String label) {
            this.label = label;
        }
    }
}
