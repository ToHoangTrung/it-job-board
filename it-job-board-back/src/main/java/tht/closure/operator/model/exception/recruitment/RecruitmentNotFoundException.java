package tht.closure.operator.model.exception.recruitment;

import tht.closure.operator.model.exception.config.ItJobBoardExceptionErrorCode;
import tht.closure.operator.model.exception.main.ResourceNotFoundException;

public class RecruitmentNotFoundException extends ResourceNotFoundException {

    public RecruitmentNotFoundException(String errorMessage) {
        super(errorMessage, ItJobBoardExceptionErrorCode.RECRUITMENT_NOT_FOUND_EXCEPTION);
    }
}
