package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "t_candidate")
@Getter
@Setter
public class Candidate extends AbstractEntity{

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private String cvUrl;

    @Column
    private String description;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @OneToMany(mappedBy = "candidate")
    private List<CandidateRecruitment> candidateRecruitments = new ArrayList<>();

}
