package com.liukai.myguzz.utils;

/**
 * @author Deng, Yuan
 * @create 2016/10/10 15:56
 */
public class CommonUtil {

    /**
     * 获取指定位数随机整数
     *
     * @param len
     * @return
     */
    public static String getRandomNum(int len) {
        return String.valueOf((long) ((Math.random() * 9 + 1) * Math.pow(10, len - 1)));
    }

    /**
     * 产生traceId
     * @return
     */
    public static String generateTraceId(){
        return System.currentTimeMillis()+getRandomNum(3);
    }


}
