package com.liukai.myguzz.domain;

import org.guzz.annotations.GenericGenerator;
import org.guzz.annotations.Table;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import java.util.Date;

/**
 * 坐席操作日志表
 */
@javax.persistence.Entity
@org.guzz.annotations.Entity(businessName = "agentOperateLog")
@Table(name = "im_agent_operate_log")
public class AgentOperateLog {

    @javax.persistence.Id
    @GenericGenerator(name = "idGenerator", strategy = "identity")
    @GeneratedValue(generator = "idGenerator")
    private long id;
    private String agentId; // 坐席id
    @Column(name = "`type`")
    private int type;    // 类型
    private String description;    // 描述
    private Date operateTime;   // 操作时间

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAgentId() {
        return agentId;
    }

    public void setAgentId(String agentId) {
        this.agentId = agentId;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getOperateTime() {
        return operateTime;
    }

    public void setOperateTime(Date operateTime) {
        this.operateTime = operateTime;
    }
}
