package tht.closure.operator.model.exception.catalog;

import tht.closure.operator.model.exception.config.ItJobBoardExceptionErrorCode;
import tht.closure.operator.model.exception.main.ResourceNotSupportException;

public class CatalogNotFoundException extends ResourceNotSupportException {

    public CatalogNotFoundException(String message) {
        super(message, ItJobBoardExceptionErrorCode.CATALOG_NOT_FOUND_EXCEPTION);
    }
}
