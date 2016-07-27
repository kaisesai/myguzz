package com.liukai.myguzz.dao;

import com.liukai.myguzz.exception.DataParseException;
import com.liukai.myguzz.exception.InvalidParamException;
import com.liukai.myguzz.exception.UnknownException;
import org.springframework.stereotype.Repository;

/**
 * Created by Administrator on 2016/7/27 0027.
 */
@Repository
public class TestExceptionDao {

    public void exception(int id) {

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
}
