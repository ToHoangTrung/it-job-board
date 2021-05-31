package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "t_recruitment")
@Getter
@Setter
public class Recruitment extends AbstractEntity{

    @Column
    private String headline;

    @CreationTimestamp
    @Column
    private LocalDate createdDate;

    @UpdateTimestamp
    @Column
    private LocalDate updatedDate;

    @OneToMany(mappedBy = "recruitment")
    private List<RecruitmentCatalog> recruitmentCategories = new ArrayList<>();

    @OneToMany(mappedBy = "recruitment")
    private List<CandidateRecruitment> candidateRecruitments = new ArrayList<>();

    @ManyToOne
    @JoinColumn
    private Recruiter recruiter;

}
