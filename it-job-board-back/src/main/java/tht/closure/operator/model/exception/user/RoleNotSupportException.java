package tht.closure.operator.model.exception.user;

import tht.closure.operator.model.exception.main.ResourceNotFoundException;

public class RoleNotSupportException extends ResourceNotFoundException {

    public RoleNotSupportException(String message) {
        super(message);
    }
}
