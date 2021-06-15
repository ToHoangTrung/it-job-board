package tht.closure.operator.model.exception.recruitment;

import tht.closure.operator.model.exception.config.ItJobBoardExceptionErrorCode;
import tht.closure.operator.model.exception.main.ResourceNotFoundException;

public class RecruitmentApplyStatusNotSupportException extends ResourceNotFoundException {

    public RecruitmentApplyStatusNotSupportException(String errorMessage) {
        super(errorMessage, ItJobBoardExceptionErrorCode.RECRUITMENT_APPLY_STATUS_NOT_SUPPORT_EXCEPTION);
    }
}
