package tht.closure.operator.model.exception.candidate;

import tht.closure.operator.model.exception.config.ItJobBoardExceptionErrorCode;
import tht.closure.operator.model.exception.main.ResourceNotSupportException;

public class RemoveApplyRecruitmentInsteadOfFavoriteException extends ResourceNotSupportException {

    public RemoveApplyRecruitmentInsteadOfFavoriteException(String message) {
        super(message, ItJobBoardExceptionErrorCode.REMOVE_APPLY_RECRUITMENT_INSTEAD_OF_FAVORITE_RECRUITMENT);
    }
}
