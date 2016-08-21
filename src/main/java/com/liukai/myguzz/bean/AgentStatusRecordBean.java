package com.liukai.myguzz.bean;

import java.util.Date;

/**
 * Created by Administrator on 2016/7/31 0031.
 */
public class AgentStatusRecordBean {

    private int id;
    private String agentId; // 坐席id
    private Date signInDate;    // 签入时间
    private int sessionNum; // 当前session数
    private int status; // 坐席状态 0离线 1在线 2忙
    private int busyReson = 0;  // 忙的原因 0=默认 1=开会 2=休息 3=培训 4=学习

    public AgentStatusRecordBean() {
    }

    public AgentStatusRecordBean(int id, String agentId, Date signInDate, int sessionNum, int status, int busyReson) {
        this.id = id;
        this.agentId = agentId;
        this.signInDate = signInDate;
        this.sessionNum = sessionNum;
        this.status = status;
        this.busyReson = busyReson;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAgentId() {
        return agentId;
    }

    public void setAgentId(String agentId) {
        this.agentId = agentId;
    }

    public Date getSignInDate() {
        return signInDate;
    }

    public void setSignInDate(Date signInDate) {
        this.signInDate = signInDate;
    }

    public int getSessionNum() {
        return sessionNum;
    }

    public void setSessionNum(int sessionNum) {
        this.sessionNum = sessionNum;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public int getBusyReson() {
        return busyReson;
    }

    public void setBusyReson(int busyReson) {
        this.busyReson = busyReson;
    }
}
