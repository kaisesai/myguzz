package com.liukai.myguzz.domain;

import com.liukai.myguzz.bean.AgentStatusRecordBean;
import com.liukai.myguzz.common.CommonBean;
import org.guzz.annotations.GenericGenerator;
import org.guzz.annotations.Table;

import javax.persistence.GeneratedValue;
import java.util.Date;

/**
 * 坐席状态记录表
 */
@javax.persistence.Entity
@org.guzz.annotations.Entity(businessName = "agentStatusRecord")
@Table(name = "im_agent_status_record")
public class AgentStatusRecord extends CommonBean {

    /**
     * 坐席状态
     **/
    public static final int STATUS_OFFLINE = 0;
    public static final int STATUS_ONLINE = 1;
    public static final int STATUS_BUSY = 2;

    /**
     * 忙的原因
     **/
    public static final int BUSY_REASON_DEFAULT = 0;
    public static final int BUSY_REASON_MEETING = 1;
    public static final int BUSY_REASON_REST = 2;
    public static final int BUSY_REASON_TRAIN = 3;
    public static final int BUSY_REASON_STUDY = 4;

    @javax.persistence.Id
    @GenericGenerator(name = "idGenerator", strategy = "identity")
    @GeneratedValue(generator = "idGenerator")
    private int id;
    private String agentId; // 坐席id
    private Date signInDate;    // 签入时间
    private int sessionNum; // 当前session数
    private int status; // 坐席状态 0离线 1在线 2忙
    private int busyReson = 0;  // 忙的原因 0=默认 1=开会 2=休息 3=培训 4=学习

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

    public AgentStatusRecordBean convertToAgentStatusRecordBean() {
        return new AgentStatusRecordBean(id, agentId, signInDate, sessionNum, status, busyReson);
    }
}
