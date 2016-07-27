package com.liukai.myguzz.exception;

/**
 * 数据解析异常
 * Created by Administrator on 2016/7/27 0027.
 */
public class DataParseException extends RuntimeException {
    private static final long serialVersionUID = -8543422382642195526L;

    public DataParseException() {
    }

    public DataParseException(String message) {
        super(message);
    }

    public DataParseException(String message, Throwable cause) {
        super(message, cause);
    }

    public DataParseException(Throwable cause) {
        super(cause);
    }

    public DataParseException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(message, cause, enableSuppression, writableStackTrace);
    }
}
