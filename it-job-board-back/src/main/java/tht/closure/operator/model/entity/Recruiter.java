package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Entity(name = "t_recruiter")
@Getter
@Setter
public class Recruiter extends AbstractEntity {

    @Column
    private String name;

    @Column
    private String website;

    @Column
    private String facebook;

    @Column
    private String location;

    @Column
    private Integer employeeQuantityMin;

    @Column
    private Integer employeeQuantityMax;

    @Column
    private String overviewContentUrl;

    @Column
    private String advertiseContentUrl;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @OneToMany(mappedBy = "recruiter")
    private Set<Recruitment> recruitments = new LinkedHashSet<>();

    @OneToMany(mappedBy = "recruiter")
    private Set<RecruiterSubCatalog> recruiterSubCatalogs = new LinkedHashSet<>();

    @Column
    @Enumerated(EnumType.STRING)
    private Type type;

    @Getter
    public enum Type {
        PRODUCT("Product", "Product"),
        OUTSOURCE("Outsource", "Outsource");

        public final String enTranslate;
        public final String vnTranslate;

        Type(String enTranslate, String vnTranslate) {
            this.vnTranslate = vnTranslate;
            this.enTranslate = enTranslate;
        }
    }

    @Column
    @Enumerated(EnumType.STRING)
    private Overtime overtime;

    public enum Overtime {
        EXTRA_SALARY_FOR_OT("Thêm lương OT", "Extra salary for OT"),
        NO("Không OT", "No OT");

        public final String vnTranslate;
        public final String enTranslate;

        Overtime(String vnTranslate, String enTranslate) {
            this.vnTranslate = vnTranslate;
            this.enTranslate = enTranslate;
        }

    }

    @Column
    @Enumerated(EnumType.STRING)
    private Country country;

    public enum Country {
        VIETNAM("Việt Nam", "Vietnam", "vn.png"),
        JAPAN("Nhật Bản", "Japan", "jp.png"),
        FRANCE("Pháp", "France", "france.png"),
        SINGAPORE("Singapore", "Singapore", "singapore.png"),
        NORWAY("Normay", "Normay", "norway.png");

        public final String vnTranslate;
        public final String enTranslate;
        public final String flagImage;

        Country(String vnTranslate, String enTranslate, String flagImage) {
            this.vnTranslate = vnTranslate;
            this.enTranslate = enTranslate;
            this.flagImage = flagImage;
        }

    }

    @Column
    @Enumerated(EnumType.STRING)
    private DayOfWeek workStartDay;

    @Column
    @Enumerated(EnumType.STRING)
    private DayOfWeek workEndDay;

    public enum DayOfWeek {
        MONDAY("Thứ 2", "Monday"),
        TUESDAY("Thứ 3", "Thứ 3"),
        WEDNESDAY("Thứ 4", "Wednesday"),
        THURSDAY("Thứ 5", "Thursday"),
        FRIDAY("Thứ 6", "Friday"),
        SATURDAY("Thứ 7", "Saturday"),
        SUNDAY("Chủ Nhật", "Sunday");

        public final String vnTranslate;
        public final String enTranslate;

        DayOfWeek(String vnTranslate, String enTranslate) {
            this.vnTranslate = vnTranslate;
            this.enTranslate = enTranslate;
        }

    }
}
