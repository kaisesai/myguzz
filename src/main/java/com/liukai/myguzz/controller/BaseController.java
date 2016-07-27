package com.liukai.myguzz.controller;

import com.liukai.myguzz.exception.DataParseException;
import com.liukai.myguzz.exception.InvalidParamException;
import com.liukai.myguzz.exception.UnknownException;

import javax.servlet.http.HttpServletRequest;

/**
 * 基础的Controller
 * Created by Administrator on 2016/7/27 0027.
 */
public class BaseController {

    // @ExceptionHandler
    public String exp(HttpServletRequest request, Exception ex) {

        request.setAttribute("ex", ex);

        if (ex instanceof DataParseException) {
            return "/error/error-dataparse";
        } else if (ex instanceof InvalidParamException) {
            return "/error/error-invalidparam";
        } else if (ex instanceof UnknownException) {
            return "/error/error-unknown";
        } else {
            return "/error/error";
        }

    }

}
