package tht.closure.operator.model.exception.recruitment;

import tht.closure.operator.model.exception.config.ItJobBoardExceptionErrorCode;
import tht.closure.operator.model.exception.main.ResourceNotSupportException;

public class RecruitmentPositionNotSupportException extends ResourceNotSupportException {

    public RecruitmentPositionNotSupportException(String message) {
        super(message, ItJobBoardExceptionErrorCode.RECRUITMENT_POSITION_NOT_SUPPORT_EXCEPTION);
    }
}
