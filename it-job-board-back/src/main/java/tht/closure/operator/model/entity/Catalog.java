package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "t_catalog")
@Getter
@Setter
public class Catalog extends AbstractEntity{

    @Column
    private String name;

    @Column
    @NotNull
    @Enumerated(EnumType.STRING)
    private Type type;

    public enum Type {
        NEW("New"),
        PLA("Planned"),
        INP("In progress"),
        FIN("Finished");

        public final String label;

        Type(String label) {
            this.label = label;
        }
    }
}
