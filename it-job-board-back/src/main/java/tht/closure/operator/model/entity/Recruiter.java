package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
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

    @Getter
    public enum Type {
        PRODUCT("Product", "Sản phẩm"),
        OUTSOURCE("Outsource", "Mã nguồn mở");

        public final String enTranslate;
        public final String vnTranslate;

        Type(String vnTranslate, String enTranslate) {
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
        VN("Việt Nam", "Vietnam", "vn.png"),
        JP("Nhật Bản", "Japan", "jp.png"),
        KO("Hàn Quốc", "Korea", "ko.png");

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
