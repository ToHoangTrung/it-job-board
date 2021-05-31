package tht.closure.operator.model.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity(name = "t_candidate_recruitment")
public class CandidateRecruitment extends AbstractEntity{


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Recruitment recruitment;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Candidate candidate;

}
