package com.liukai.myguzz.domain;

import org.guzz.annotations.GenericGenerator;
import org.guzz.annotations.Table;

import javax.persistence.GeneratedValue;

/**
 * 配置字典表
 */
@javax.persistence.Entity
@org.guzz.annotations.Entity(businessName = "configDictionary")
@Table(name = "im_config_dictionary")
public class ConfigDictionary {

    /**
     * 分配策略
     * 1 随机分配
     * 2 坐席上线先后分配
     * 3 坐席会话数大小分配
     * 4 优先按会话数大小分配，相同的情况下按上线先后分配
     */
    public static final int POLICY_RANDOM = 1;
    public static final int POLICY_EARLY_OR_LATE = 2;
    public static final int POLICY_SESSION_NUM = 3;
    public static final int POLICY_BEST = 4;

    @javax.persistence.Id
    @GenericGenerator(name = "idGenerator", strategy = "identity")
    @GeneratedValue(generator = "idGenerator")
    private int id;
    private String dicCode; // 字典code
    private String dicName; // 字典code描述
    private String dicValue;    // 字典code值
    private String dicDes;  // 字典code值的描述

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDicCode() {
        return dicCode;
    }

    public void setDicCode(String dicCode) {
        this.dicCode = dicCode;
    }

    public String getDicName() {
        return dicName;
    }

    public void setDicName(String dicName) {
        this.dicName = dicName;
    }

    public String getDicValue() {
        return dicValue;
    }

    public void setDicValue(String dicValue) {
        this.dicValue = dicValue;
    }

    public String getDicDes() {
        return dicDes;
    }

    public void setDicDes(String dicDes) {
        this.dicDes = dicDes;
    }
}
