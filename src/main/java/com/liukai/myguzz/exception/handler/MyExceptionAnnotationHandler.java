package com.liukai.myguzz.exception.handler;

import com.liukai.myguzz.exception.DataParseException;
import com.liukai.myguzz.exception.InvalidParamException;
import com.liukai.myguzz.exception.UnknownException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;

/**
 * 使用@ControllerAdvice注解下的异常处理器
 * Created by Administrator on 2016/7/27 0027.
 */
@ControllerAdvice
public class MyExceptionAnnotationHandler {

    @ExceptionHandler
    public String exp(HttpServletRequest request, Exception ex) {

        request.setAttribute("ex", ex);
        System.out.println(ex);

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
