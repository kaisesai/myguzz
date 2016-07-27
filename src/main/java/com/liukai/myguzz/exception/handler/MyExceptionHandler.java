package com.liukai.myguzz.exception.handler;

import com.liukai.myguzz.exception.DataParseException;
import com.liukai.myguzz.exception.InvalidParamException;
import com.liukai.myguzz.exception.UnknownException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

/**
 * 自定义异常处理器
 * Created by Administrator on 2016/7/27 0027.
 */
@ControllerAdvice
public class MyExceptionHandler implements HandlerExceptionResolver {

    /**
     * 处理异常
     *
     * @param request
     * @param response
     * @param handler
     * @param ex
     * @return
     */
    @Override
    public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) {
        System.out.println(handler);
        System.out.println(ex);

        //创建模式与视图对象
        ModelAndView modelAndView = new ModelAndView();

        Map<String, Object> model = new HashMap<>();
        model.put("ex", ex);
        modelAndView.addObject(model);

        if (ex instanceof DataParseException) {
            modelAndView.setViewName("/error/error-dataparse");
        } else if (ex instanceof InvalidParamException) {
            modelAndView.setViewName("/error/error-invalidparam");
        } else if (ex instanceof UnknownException) {
            modelAndView.setViewName("/error/error-unknown");
        } else {
            modelAndView.setViewName("/error/error");
        }
        return modelAndView;
    }
}
