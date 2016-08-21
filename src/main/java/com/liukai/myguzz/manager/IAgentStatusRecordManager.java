package com.liukai.myguzz.manager;

import com.liukai.myguzz.domain.AgentStatusRecord;

import java.util.List;

/**
 * 坐席状态记录Manager
 * Created by Administrator on 2016/7/28 0028.
 */
public interface IAgentStatusRecordManager {

    AgentStatusRecord queryByAgentId(String agentId);

    List<AgentStatusRecord> queryList(AgentStatusRecord asr);

}
