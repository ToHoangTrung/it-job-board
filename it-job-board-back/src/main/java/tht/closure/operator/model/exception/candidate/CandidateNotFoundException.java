package tht.closure.operator.model.exception.candidate;

import tht.closure.operator.model.exception.config.ItJobBoardExceptionErrorCode;
import tht.closure.operator.model.exception.main.ResourceNotFoundException;

public class CandidateNotFoundException extends ResourceNotFoundException {

    public CandidateNotFoundException(String message) {
        super(message, ItJobBoardExceptionErrorCode.CANDIDATE_NOT_FOUND_EXCEPTION);
    }
}
