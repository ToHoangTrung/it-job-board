package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import java.util.List;

@Entity(name = "t_catalog")
@Getter
@Setter
public class Catalog extends AbstractEntity {

    @Column
    private String name;

    @OneToMany(mappedBy = "catalog", fetch = FetchType.LAZY)
    private List<SubCatalog> subCatalogs;

}
