package tht.closure.operator.model.exception.user;

import tht.closure.operator.model.exception.main.ResourceHaveAlreadyExistException;

public class UsernameHaveAlreadyExistException extends ResourceHaveAlreadyExistException {

    public UsernameHaveAlreadyExistException(String message) {
        super(message);
    }
}
