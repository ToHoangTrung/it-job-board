package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "t_recruitment_catalog")
@Getter
@Setter
public class RecruitmentCatalog extends AbstractEntity{

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Recruitment recruitment;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Catalog catalog;
}
