package com.liukai.myguzz.manager.impl;

import com.liukai.myguzz.dao.TestExceptionDao;
import com.liukai.myguzz.exception.DataParseException;
import com.liukai.myguzz.exception.InvalidParamException;
import com.liukai.myguzz.exception.UnknownException;
import com.liukai.myguzz.manager.ITestExceptionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * 异常Manager实现类
 * Created by Administrator on 2016/7/27 0027.
 */
@Service
public class TestExceptionManagerImpl implements ITestExceptionManager {

    @Autowired
    private TestExceptionDao testExceptionDao;

    @Override
    public void service(int id) {
        switch (id) {
            case 0:
                throw new DataParseException();
            case 1:
                throw new InvalidParamException();
            case 2:
                throw new UnknownException();
            default:
                throw new RuntimeException();
        }
    }

    @Override
    public void dao(int id) {
        testExceptionDao.exception(id);
    }
}
