package tht.closure.operator.repository.custom;

import com.querydsl.core.types.dsl.BooleanExpression;
import tht.closure.operator.model.entity.Recruitment;
import tht.closure.operator.service.main.PagePaging;
import tht.closure.operator.service.main.PageResult;

public interface RecruitmentRepositoryCustom {

    PageResult<Recruitment> searchRecruitment(BooleanExpression exp, PagePaging paging);
}
