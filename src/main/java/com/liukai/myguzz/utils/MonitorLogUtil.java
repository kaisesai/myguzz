package com.liukai.myguzz.utils;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * 供falcon监控使用的工具类
 */
public class MonitorLogUtil {

    private static Log logger = LogFactory.getLog("monitorLog");

    /**
     * @param serverName 能够说明业务类型的字符串,必须为英文
     * @param message 错误信息
     */
    public static void error(String serverName,String errorCode,String message) {
        logger.error("[" + serverName + "][" + errorCode + "][" + message + "]");
    }
    
    /**
     * 功能:
     * @author wusq
     * @version 创建时间: 2016年10月24日 下午3:06:34
     *
     * @param error
     * @param message
     */
    // public static void error(MonitorLogEnum error, String message) {
    	// logger.error("[" + error.getServerName() + "][" + error.getErrorCode() +"][" + message + "]");
    // }

    /**
     * @param serverName 能够说明业务类型的字符串,必须为英文
     * @param message 错误信息
     */
    public static void warn(String serverName,String errorCode,String message) {
        logger.warn("[" + serverName + "][" + errorCode + "][" + message + "]");
    }
    
    /**
     * 功能:
     * @author wusq
     * @version 创建时间: 2016年10月24日 下午3:06:53
     *
     * @param error
     * @param message
     */
    // public static void warn(MonitorLogEnum error, String message) {
    // 	logger.warn("[" + error.getServerName() + "][" + error.getErrorCode() +"][" + message + "]");
    // }

}

