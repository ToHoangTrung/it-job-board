package tht.closure.operator.model.exception.main;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;
import tht.closure.operator.model.exception.config.ItJobBoardException;
import tht.closure.operator.model.exception.config.ItJobBoardExceptionErrorCode;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends ItJobBoardException {

    public ResourceNotFoundException(String errorMessage) {
        super(errorMessage, ItJobBoardExceptionErrorCode.RESOURCE_HAVE_ALREADY_EXIST_EXCEPTION, HttpStatus.NOT_FOUND);
    }

    public ResourceNotFoundException(String errorMessage, String exceptionErrorCode) {
        super(errorMessage, exceptionErrorCode, HttpStatus.NOT_FOUND);
    }
}
