package com.liukai.myguzz.bean;

import com.liukai.myguzz.common.ErrorCode;

/**
 * Created by Administrator on 2016/7/31 0031.
 */
public class Error {

    private int errorCode = ErrorCode.SUCCESS_ERROR_CODE;
    private String errorMessage = ErrorCode.SUCCESS_ERROR_CODE_MESSAGE;
    private String errorUserMessage = ErrorCode.SUCCESS_ERROR_CODE_MESSAGE;

    public Error() {
    }

    public Error(int errorCode, String errorMessage) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }

    public int getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(int errorCode) {
        this.errorCode = errorCode;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public String getErrorUserMessage() {
        return errorUserMessage;
    }

    public void setErrorUserMessage(String errorUserMessage) {
        this.errorUserMessage = errorUserMessage;
    }

    @Override
    public String toString() {
        return "Error{" +
                "errorCode=" + errorCode +
                ", errorMessage='" + errorMessage + '\'' +
                ", errorUserMessage='" + errorUserMessage + '\'' +
                '}';
    }
}
