package tht.closure.operator.model.exception.config;

public class ItJobBoardExceptionErrorCode {

    //main base error code
    public static final String RESOURCE_NOT_FOUND_EXCEPTION = "EX-MAIN-RESOURCE-NOT-FOUND";
    public static final String RESOURCE_HAVE_ALREADY_EXIST_EXCEPTION = "EX-MAIN-RESOURCE-HAVE-ALREADY-EXIST";
    public static final String CONCURRENT_UPDATE_EXCEPTION = "EX-MAIN-CONCURRENT-UPDATE";
    public static final String UN_HANDLE_EXCEPTION = "EX-UN-HANDLER";
    public static final String INPUT_TYPE_INVALID_EXCEPTION = "EX-INPUT-TYPE-INVALID";

    //user error code
    public static final String USER_USERNAME_HAVE_ALREADY_EXIST = "EX-USER-USERNAME-HAVE-ALREADY-EXIST";
    public static final String USER_EMAIL_HAVE_ALREADY_EXIST = "EX-USER-EMAIL-HAVE-ALREADY-EXIST";
    public static final String USER_EMAIL_NOT_FOUND = "EX-USER-USERNAME-NOT-FOUND";
    public static final String USER_USERNAME_NOT_FOUND = "EX-USER-EMAIL-NOT-FOUND";
    public static final String USER_PASSWORD_NOT_CORRECT = "EX-USER-PASSWORD-NOT-CORRECT";
    public static final String USER_ROLE_NOT_SUPPORT = "EX-USER-ROLE-NOT-SUPPORT";
}
