package com.liukai.myguzz.exception;

/**
 * 无效参数异常
 * Created by Administrator on 2016/7/27 0027.
 */
public class InvalidParamException extends RuntimeException {

    private static final long serialVersionUID = -8070470273218234811L;

    public InvalidParamException() {
    }

    public InvalidParamException(String message) {
        super(message);
    }

    public InvalidParamException(String message, Throwable cause) {
        super(message, cause);
    }

    public InvalidParamException(Throwable cause) {
        super(cause);
    }

    public InvalidParamException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
