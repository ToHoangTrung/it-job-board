package tht.closure.operator.model.exception.config;

public class ItJobBoardExceptionErrorCode {

    //main base error code
    public static final String RESOURCE_NOT_FOUND_EXCEPTION = "EX-MAIN-RESOURCE-NOT-FOUND";
    public static final String RESOURCE_HAVE_ALREADY_EXIST_EXCEPTION = "EX-MAIN-RESOURCE-HAVE-ALREADY-EXIST";
    public static final String CONCURRENT_UPDATE_EXCEPTION = "EX-MAIN-CONCURRENT-UPDATE";
    public static final String RESOURCE_NOT_SUPPORT_EXCEPTION = "EX-MAIN-RESOURCE-NOT-SUPPORT";
    public static final String UN_HANDLE_EXCEPTION = "EX-UN-HANDLER";
    public static final String INPUT_TYPE_INVALID_EXCEPTION = "EX-INPUT-TYPE-INVALID";

    //user error code
    public static final String USER_USERNAME_HAVE_ALREADY_EXIST_EXCEPTION = "EX-USER-USERNAME-HAVE-ALREADY-EXIST";
    public static final String USER_EMAIL_HAVE_ALREADY_EXIST_EXCEPTION = "EX-USER-EMAIL-HAVE-ALREADY-EXIST";
    public static final String USER_EMAIL_NOT_FOUND_EXCEPTION = "EX-USER-USERNAME-NOT-FOUND";
    public static final String USER_USERNAME_NOT_FOUND_EXCEPTION = "EX-USER-EMAIL-NOT-FOUND";
    public static final String USER_PASSWORD_NOT_CORRECT_EXCEPTION = "EX-USER-PASSWORD-NOT-CORRECT";
    public static final String USER_ROLE_NOT_SUPPORT_EXCEPTION = "EX-USER-ROLE-NOT-SUPPORT";

    //recruitment error code
    public static final String RECRUITMENT_NOT_FOUND_EXCEPTION = "EX-RECRUITMENT-NOT-FOUND";
    public static final String RECRUITMENT_APPLY_STATUS_NOT_SUPPORT_EXCEPTION = "EX-RECRUITMENT-APPLY-STATUS-NOT-SUPPORT";
    public static final String RECRUITMENT_POSITION_NOT_SUPPORT_EXCEPTION = "EX-RECRUITMENT-POSITION-NOT-SUPPORT";

    //candidate error code
    public static final String CANDIDATE_NOT_FOUND_EXCEPTION = "EX-CANDIDATE-NOT-FOUND";
    public static final String REMOVE_APPLY_RECRUITMENT_INSTEAD_OF_FAVORITE_RECRUITMENT = "EX-CANDIDATE-REMOVE-APPLY-RECRUITMENT-INSTEAD-OF-FAVORITE-RECRUITMENT";
    public static final String DUPLICATE_SAVED_RECRUITMENT = "EX-DUPLICATE-SAVED-RECRUITMENT";

    //catalog error code
    public static final String CATALOG_NOT_FOUND_EXCEPTION = "EX-CATALOG-NOT-FOUND";

    //recruiter error code
    public static final String RECRUITER_NOT_FOUND_EXCEPTION = "EX-RECRUITER-NOT-FOUND";
}
