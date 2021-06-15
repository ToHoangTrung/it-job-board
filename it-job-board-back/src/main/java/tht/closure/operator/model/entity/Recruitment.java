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
    private Set<CandidateRecruitment> candidateRecruitments = new LinkedHashSet<>();

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
