package com.liukai.myguzz.controller;

import com.liukai.myguzz.bean.ResultBean;
import com.liukai.myguzz.domain.AgentStatusRecord;
import com.liukai.myguzz.manager.IAgentStatusRecordManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * 坐席状态控制器
 * Created by Administrator on 2016/7/27 0027.
 */
@RequestMapping("/agentStatus")
@Controller
public class AgentStatusController {


    @Autowired
    private IAgentStatusRecordManager iAgentStatusRecordManager;

    @ResponseBody
    @RequestMapping(value = "/queryList", method = RequestMethod.GET)
    public ResultBean queryList(AgentStatusRecord asr) {
        ResultBean resultBean = new ResultBean();
        resultBean.setData(iAgentStatusRecordManager.queryList(asr));
        return resultBean;
    }

    @ResponseBody
    @RequestMapping(value = "/query", method = RequestMethod.GET)
    public ResultBean queryByAgentId(@RequestParam String agentId) {
        ResultBean resultBean = new ResultBean();
        AgentStatusRecord agentStatusRecord = iAgentStatusRecordManager.queryByAgentId(agentId);
        resultBean.setData(agentStatusRecord == null ? null : agentStatusRecord.convertToAgentStatusRecordBean());
        return resultBean;
    }
}
