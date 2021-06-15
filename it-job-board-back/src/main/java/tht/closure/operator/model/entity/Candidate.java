package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

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

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @OneToMany(mappedBy = "candidate", fetch = FetchType.LAZY)
    private Set<CandidateRecruitment> candidateRecruitments = new LinkedHashSet<>();

}
