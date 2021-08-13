package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Entity(name = "t_recruitment")
@Getter
@Setter
public class Recruitment extends AbstractEntity {

    @Column
    private String headline;

    @Column
    private String requirementContentUrl;

    @Column
    private LocalDate startDate;

    @Column
    private LocalDate endDate;

    @Column
    private String location;

    @Column
    private String salaryMin;

    @Column
    private String salaryMax;

    @OneToMany(mappedBy = "recruitment", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<RecruitmentSubCatalog> recruitmentSubCatalogs = new LinkedHashSet<>();

    @OneToMany(mappedBy = "recruitment", cascade = CascadeType.ALL)
    private Set<RecruitmentCandidate> recruitmentCandidates = new LinkedHashSet<>();

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

    public static List<String> getAllRecruitmentPosition() {
        return Stream.of(Recruitment.Position.values()).map(Recruitment.Position::name).collect(Collectors.toList());
    }

}
