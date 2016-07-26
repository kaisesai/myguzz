package com.liukai.myguzz.domain;

import org.guzz.annotations.GenericGenerator;
import org.guzz.annotations.Table;

import javax.persistence.GeneratedValue;
import java.util.Date;

/**
 * 客服与用户的会话记录model
 */
@javax.persistence.Entity
@org.guzz.annotations.Entity(businessName = "sessionRecord")
@Table(name = "im_session_record")
public class SessionRecord {

    @javax.persistence.Id
    @GenericGenerator(name = "idGenerator", strategy = "identity")
    @GeneratedValue(generator = "idGenerator")
    private long id; //主键
    private String sessionId; //会话id
    private Date startDate;  //会话开始时间
    private Date endDate;  //会话结束时间
    private String fromUserId;//会话发起方id
    private String toUserId;//消息接收方id

    /**
     * 修改人：wangshuo
     * 需求新加四个字段
     * 开始消息ID startMsgId
     * 结束消息ID endMsgId
     * 创建时间 createDate
     * 更新时间 updateDate
     */
    private String startMsgId; //开始消息ID
    private String endMsgId;  //结束消息ID
    private Date createDate;  //创建时间
    private Date updateDate;  //更新时间

    private Date accessDate;  //会话的更新时间
//    private String closer;  // 会话结束方
//    private String closeReason; // 会话结束原因


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSessionId() {
        return sessionId;
    }

    public void setSessionId(String sessionId) {
        this.sessionId = sessionId;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getStartMsgId() {
        return startMsgId;
    }

    public String getEndMsgId() {
        return endMsgId;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setStartMsgId(String startMsgId) {
        this.startMsgId = startMsgId;
    }

    public void setEndMsgId(String endMsgId) {
        this.endMsgId = endMsgId;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public String getFromUserId() {
        return fromUserId;
    }

    public String getToUserId() {
        return toUserId;
    }

    public void setFromUserId(String fromUserId) {
        this.fromUserId = fromUserId;
    }

    public void setToUserId(String toUserId) {
        this.toUserId = toUserId;
    }

    public Date getAccessDate() {
        return accessDate;
    }

    public void setAccessDate(Date accessDate) {
        this.accessDate = accessDate;
    }

//    public String getCloser() {
//        return closer;
//    }
//
//    public void setCloser(String closer) {
//        this.closer = closer;
//    }
//
//    public String getCloseReason() {
//        return closeReason;
//    }
//
//    public void setCloseReason(String closeReason) {
//        this.closeReason = closeReason;
//    }
}
