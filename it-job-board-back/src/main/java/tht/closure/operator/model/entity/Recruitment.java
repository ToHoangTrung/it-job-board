package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;

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
    private String salary;

    @OneToMany(mappedBy = "recruitment")
    private List<RecruitmentSubCatalog> recruitmentSubCatalogs = new ArrayList<>();

    @OneToMany(mappedBy = "recruitment")
    private List<CandidateRecruitment> candidateRecruitments = new ArrayList<>();

    @ManyToOne
    @JoinColumn
    private Recruiter recruiter;

    @Column
    @Enumerated(EnumType.STRING)
    private Position position;

    public enum Position {
        INTERN("Internship", "Thực tập sinh"),
        FRESHER("Fresher", "");

        public final String enTranslate;
        public final String vnTranslate;

        Position(String enTranslate, String vnTranslate) {
            this.enTranslate = enTranslate;
            this.vnTranslate = vnTranslate;
        }
    }

}
