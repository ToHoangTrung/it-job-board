package tht.closure.operator.model.exception.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;
import tht.closure.operator.model.dto.ExceptionResponse;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class ItJobBoardException extends RuntimeException{

    private final ExceptionResponse exceptionResponse;

    public ItJobBoardException(String errorMessage, String errorCode, HttpStatus httpStatus){
        super(errorMessage);
        exceptionResponse = new ExceptionResponse(errorMessage, errorCode, httpStatus, new ArrayList<>());
    }

    public ItJobBoardException(String errorMessage, String errorCode, HttpStatus httpStatus, List<String> errors){
        super(errorMessage);
        exceptionResponse = new ExceptionResponse(errorMessage, errorCode, httpStatus, errors);
    }
}
