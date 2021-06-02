package tht.closure.operator.model.exception.user;

import tht.closure.operator.model.exception.config.ItJobBoardExceptionErrorCode;
import tht.closure.operator.model.exception.main.ResourceHaveAlreadyExistException;

public class EmailHaveAlreadyExistException extends ResourceHaveAlreadyExistException {

    public EmailHaveAlreadyExistException(String message) {
        super(message, ItJobBoardExceptionErrorCode.USER_EMAIL_HAVE_ALREADY_EXIST);
    }
}
