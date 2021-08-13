package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity(name = "t_candidate")
@Getter
@Setter
public class Candidate extends AbstractEntity {

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

    @OneToMany(mappedBy = "candidate", cascade = CascadeType.ALL, orphanRemoval=true)
    private Set<RecruitmentCandidate> recruitmentCandidates = new LinkedHashSet<>();

}
