package tht.closure.operator.model.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "t_city")
@Getter
@Setter
public class City extends AbstractEntity{

    private String name;

    @OneToMany(mappedBy = "city", fetch = FetchType.LAZY)
    private List<Recruiter> recruiters = new ArrayList<>();
}
