package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Entity(name = "t_recruitment_candidate")
@Getter
@Setter
public class RecruitmentCandidate extends AbstractEntity {

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Recruitment recruitment;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Candidate candidate;

    private String guestName;

    private String guestCvUrl;

    private String guestPhone;

    private String guestEmail;

    public RecruitmentCandidate(Candidate candidate, Recruitment recruitment, Type type, Status status) {
        this.recruitment = recruitment;
        this.candidate = candidate;
        this.type = type;
        this.status = status;
    }

    public RecruitmentCandidate() {

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
        NONE("None",""),
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
