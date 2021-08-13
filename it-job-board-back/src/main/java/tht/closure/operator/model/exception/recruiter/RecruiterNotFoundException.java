package tht.closure.operator.model.exception.recruiter;

import tht.closure.operator.model.exception.config.ItJobBoardExceptionErrorCode;
import tht.closure.operator.model.exception.main.ResourceNotSupportException;

public class RecruiterNotFoundException extends ResourceNotSupportException {

    public RecruiterNotFoundException(String errorMessage) {
        super(errorMessage, ItJobBoardExceptionErrorCode.RECRUITER_NOT_FOUND_EXCEPTION);
    }
}
