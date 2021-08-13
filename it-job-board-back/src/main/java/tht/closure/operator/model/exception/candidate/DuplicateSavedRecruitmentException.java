package tht.closure.operator.model.exception.candidate;

import tht.closure.operator.model.exception.config.ItJobBoardExceptionErrorCode;
import tht.closure.operator.model.exception.main.ResourceNotSupportException;

public class DuplicateSavedRecruitmentException extends ResourceNotSupportException {

    public DuplicateSavedRecruitmentException(String message) {
        super(message, ItJobBoardExceptionErrorCode.DUPLICATE_SAVED_RECRUITMENT);
    }
}
