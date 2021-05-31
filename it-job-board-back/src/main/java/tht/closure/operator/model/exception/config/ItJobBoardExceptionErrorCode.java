package tht.closure.operator.model.exception.config;

public class ItJobBoardExceptionErrorCode {

    //main base error code
    public static final String RESOURCE_NOT_FOUND_EXCEPTION = "EX-MAIN-RESOURCE-NOT-FOUND-";
    public static final String RESOURCE_HAVE_ALREADY_EXIST_EXCEPTION = "EX-MAIN-RESOURCE-HAVE-ALREADY-EXIST-";
    public static final String CONCURRENT_UPDATE_EXCEPTION = "EX-MAIN_CONCURRENT_UPDATE_";

    //user error code
    public static final String USER_USERNAME_HAVE_ALREADY_EXIST = "EX-USER-USERNAME-HAVE-ALREADY-EXIST-";
    public static final String USER_EMAIL_HAVE_ALREADY_EXIST = "EX-USER-EMAIL-HAVE-ALREADY-EXIST-";
}
