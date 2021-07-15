package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Entity(name = "t_candidate_recruitment")
@Getter
@Setter
public class CandidateRecruitment extends AbstractEntity {


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Recruitment recruitment;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Candidate candidate;

    public CandidateRecruitment(Candidate candidate, Recruitment recruitment, Type type, Status status) {
        this.recruitment = recruitment;
        this.candidate = candidate;
        this.type = type;
        this.status = status;
    }


    public CandidateRecruitment() {

    }

    @Column
    @Enumerated(EnumType.STRING)
    private Type type;

    public enum Type {
        FAVORITE("Favorite", ""),
        APPLY("Apply", "");

        public final String enTranslate;
        public final String vnTranslate;

        Type(String enTranslate, String vnTranslate) {
            this.enTranslate = enTranslate;
            this.vnTranslate = vnTranslate;
        }
    }

    @Column
    @Enumerated(EnumType.STRING)
    private Status status;

    public enum Status {
        NEW("New", ""),
        CON("Considering", ""),
        ACC("Accept", ""),
        DEN("Denied", "");

        public final String enTranslate;
        public final String vnTranslate;

        Status(String enTranslate, String vnTranslate) {
            this.enTranslate = enTranslate;
            this.vnTranslate = vnTranslate;
        }

        public static Set<String> getAllApplyRecruitmentStatus() {
            return Stream.of(User.Role.values()).map(User.Role::name).collect(Collectors.toSet());
        }
    }

}
