package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "t_recruiter")
@Getter
@Setter
public class Recruiter extends AbstractEntity{

    @Column
    private String name;

    @Column
    private String website;

    @Column
    private String facebook;

    @Column
    private String location;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @OneToMany(mappedBy = "recruiter", fetch = FetchType.LAZY)
    private List<Recruitment> recruitments = new ArrayList<>();

    @OneToMany(mappedBy = "recruiter", fetch = FetchType.LAZY)
    private List<RecruiterSubCatalog> recruiterSubCatalogs = new ArrayList<>();

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

    @ManyToOne
    @JoinColumn
    private City city;
}
