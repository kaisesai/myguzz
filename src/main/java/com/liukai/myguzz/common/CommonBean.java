package com.liukai.myguzz.common;

/**
 * 公共的bean，具有分页属性
 * Created by Administrator on 2016/7/31 0031.
 */
public class CommonBean {

    private int pageNo;
    private int pageSize;

    public int getPageNo() {
        return pageNo;
    }

    public void setPageNo(int pageNo) {
        this.pageNo = pageNo;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }
}
