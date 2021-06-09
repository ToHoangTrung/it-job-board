package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.DayOfWeek;
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

    @Column
    private Integer employeeQuantity;

    @Column
    private DayOfWeek startWorkDay;

    @Column
    private DayOfWeek startEndDay;

    @Column

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
        PRODUCT("Product"),
        OUTSOURCE("Outsource");

        public final String label;

        Type(String label) {
            this.label = label;
        }
    }

    @Column
    @Enumerated(EnumType.STRING)
    private OutSource outSource;

    public enum OutSource {
        EXTRA_SALARY_FOR_OT("Extra salary for OT"),
        NO("No OT");

        public final String label;

        OutSource(String label) {
            this.label = label;
        }
    }

    @Column
    @Enumerated(EnumType.STRING)
    private Country country;

    public enum Country {
        VN(""),
        JP("No OT");

        public final String label;

        Country(String label) {
            this.label = label;
        }
    }

    @ManyToOne
    @JoinColumn
    private City city;
}
