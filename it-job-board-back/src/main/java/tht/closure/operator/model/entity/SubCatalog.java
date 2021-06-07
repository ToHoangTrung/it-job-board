package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "t_sub_catalog")
@Getter
@Setter
public class SubCatalog extends AbstractEntity{

    private String name;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Catalog catalog;

    @OneToMany(mappedBy = "subCatalog", fetch = FetchType.LAZY)
    private List<RecruitmentSubCatalog> recruitmentSubCatalogs = new ArrayList<>();

    @OneToMany(mappedBy = "subCatalog", fetch = FetchType.LAZY)
    private List<RecruitmentSubCatalog> recruiterSubCatalogs = new ArrayList<>();
}
