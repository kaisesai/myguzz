package com.liukai.myguzz.utils;

import org.apache.log4j.Logger;
import org.guzz.util.Assert;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * 配置文件工具类
 * 读取config.properties文件中的配置信息信息
 * Created by Administrator on 2016/10/6 0006.
 */
public class ConfigUtils {

    private static final String CONFIG = "config.properties";
    private static final Properties PROPERTIES = new Properties();
    private static final Logger LOGGER = Logger.getLogger(ConfigUtils.class);

    static {
        InputStream inputStream = ConfigUtils.class.getClassLoader().getResourceAsStream(CONFIG);
        try {
            PROPERTIES.load(inputStream);
            LOGGER.info("加载配置文件 " + CONFIG + " 信息成功!");
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    /**
     * lucene的索引地址键
     */
    private static final String KEY_LUCENE_INDEX_PATH = "lucene_index_path";

    /**
     * lucene的索引地址值
     */
    public static final String LUCENE_INDEX_PATH = getProperty(KEY_LUCENE_INDEX_PATH);

    /**
     * 根据键来读取值
     *
     * @param key
     * @return
     */
    public static String getProperty(String key) {
        Assert.assertNotEmpty(key, "键key为空");
        return PROPERTIES.getProperty(key);
    }
}
