package com.liukai.myguzz.manager.impl;

import com.liukai.myguzz.domain.AgentStatusRecord;
import com.liukai.myguzz.manager.IAgentStatusRecordManager;
import org.guzz.dao.GuzzBaseDao;
import org.guzz.orm.se.SearchExpression;
import org.guzz.orm.se.Terms;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2016/7/28 0028.
 */
@Service
public class AgentStatusRecordManagerImpl implements IAgentStatusRecordManager {

    @Autowired
    private GuzzBaseDao guzzBaseDao;

    @Override
    public AgentStatusRecord queryByAgentId(String agentId) {
        SearchExpression se = SearchExpression.forClass(AgentStatusRecord.class);
        se.and(Terms.eq("agentId", agentId));
        return (AgentStatusRecord) guzzBaseDao.findObject(se);
    }

    @Override
    public List<AgentStatusRecord> queryList(AgentStatusRecord asr) {
        SearchExpression se = SearchExpression.forClass(AgentStatusRecord.class);
        se.setPageNo(asr.getPageNo());
        se.setPageSize(asr.getPageSize());
        return guzzBaseDao.list(se);
    }
}
