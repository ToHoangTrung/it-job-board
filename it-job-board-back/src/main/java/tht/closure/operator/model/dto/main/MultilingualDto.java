package tht.closure.operator.model.dto.main;

import lombok.Getter;
import lombok.Setter;
import tht.closure.operator.model.dto.RecruitmentDto;

@Getter
@Setter
public abstract class MultilingualDto {

    private String name;

    private String enTranslate;

    private String vnTranslate;

}
