package com.liukai.myguzz.exception;

/**
 * 未知的异常
 * Created by Administrator on 2016/7/27 0027.
 */
public class UnknownException extends RuntimeException {
    private static final long serialVersionUID = -5499137812273439677L;

    public UnknownException() {
    }

    public UnknownException(String message) {
        super(message);
    }

    public UnknownException(String message, Throwable cause) {
        super(message, cause);
    }

    public UnknownException(Throwable cause) {
        super(cause);
    }

    public UnknownException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
