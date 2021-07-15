package tht.closure.operator.model.exception.config;

public class ItJobBoardExceptionErrorCode {

    //main base error code
    public static final String RESOURCE_NOT_FOUND_EXCEPTION = "EX-MAIN-RESOURCE-NOT-FOUND";
    public static final String RESOURCE_HAVE_ALREADY_EXIST_EXCEPTION = "EX-MAIN-RESOURCE-HAVE-ALREADY-EXIST";
    public static final String CONCURRENT_UPDATE_EXCEPTION = "EX-MAIN-CONCURRENT-UPDATE";
    public static final String UN_HANDLE_EXCEPTION = "EX-UN-HANDLER";
    public static final String INPUT_TYPE_INVALID_EXCEPTION = "EX-INPUT-TYPE-INVALID";
    public static final String CLOSURE_ENTITY_MANAGER_FACTORY = "CLOSURE-ENTITY-MANAGER-FACTORY";

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
}
