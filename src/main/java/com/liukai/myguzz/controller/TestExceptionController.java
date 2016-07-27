package com.liukai.myguzz.controller;

import com.liukai.myguzz.exception.DataParseException;
import com.liukai.myguzz.exception.InvalidParamException;
import com.liukai.myguzz.exception.UnknownException;
import com.liukai.myguzz.manager.ITestExceptionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 异常测试控制器
 * Created by Administrator on 2016/7/27 0027.
 */
@RequestMapping(value = "/testexception")
@Controller
public class TestExceptionController extends BaseController {

    @Autowired
    private ITestExceptionManager iTestExceptionManager;

    /**
     * 从controller层抛出的异常
     *
     * @param id
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/controller")
    public String controller(int id) {
        switch (id) {
            case 0:
                throw new DataParseException();
            case 1:
                throw new InvalidParamException();
            case 2:
                throw new UnknownException();
            default:
                return "success";
        }
    }

    @ResponseBody
    @RequestMapping(value = "/service")
    public String service(int id) {
        iTestExceptionManager.service(id);
        return "success";
    }

    @ResponseBody
    @RequestMapping(value = "/dao")
    public String dao(int id) {
        iTestExceptionManager.dao(id);
        return "success";
    }

}
