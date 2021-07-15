package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Entity(name = "t_recruitment")
@Getter
@Setter
public class Recruitment extends AbstractEntity {

    @Column
    private String headline;

    @Column
    private String responsibilityContentUrl;

    @Column
    private String requirementContentUrl;

    @Column
    private String benefitContentUrl;

    @Column
    private LocalDate startDate;

    @Column
    private LocalDate endDate;

    @Column
    private Integer recruitQuantity;

    @Column
    private String location;

    @Column
    private String salaryMin;

    @Column
    private String salaryMax;

    @OneToMany(mappedBy = "recruitment")
    private Set<RecruitmentSubCatalog> recruitmentSubCatalogs = new LinkedHashSet<>();

    @OneToMany(mappedBy = "recruitment")
    private Set<CandidateRecruitment> candidateRecruitments = new LinkedHashSet<>();

    @ManyToOne
    @JoinColumn
    private Recruiter recruiter;

    @Column
    @Enumerated(EnumType.STRING)
    private Position position;

    public enum Position {
        INTERN("Internship", "Thực tập sinh"),
        FRESHER("Fresher", ""),
        SENIOR("Senior", ""),
        JUNIOR("Junior", "");

        public final String enTranslate;
        public final String vnTranslate;

        Position(String enTranslate, String vnTranslate) {
            this.enTranslate = enTranslate;
            this.vnTranslate = vnTranslate;
        }
    }

    @Column
    @Enumerated(EnumType.STRING)
    private Experience experience;

    public enum Experience {
        NONE("None", "Không"),
        ONE_YEAR("1 year of experience", "1 năm kinh nghiệm"),
        TWO_YEAR("2 year of experience", "2 năm kinh nghiệm"),
        THREE_YEAR("3 year of experience", "3 năm kinh nghiệm");

        public final String enTranslate;
        public final String vnTranslate;

        Experience(String enTranslate, String vnTranslate) {
            this.enTranslate = enTranslate;
            this.vnTranslate = vnTranslate;
        }
    }

    @Column
    @Enumerated(EnumType.STRING)
    private City city;

    public enum City {
        HCM("Ho Chi Minh", "Hồ Chí Minh"),
        HA_NOI("Ha Noi", "Hà Nội"),
        DA_NANG("Da Nang", "Đà Nẵng");

        public final String enTranslate;
        public final String vnTranslate;

        City(String enTranslate, String vnTranslate) {
            this.enTranslate = enTranslate;
            this.vnTranslate = vnTranslate;
        }
    }

}
