package com.liukai.myguzz.bean;

/**
 * Created by Administrator on 2016/7/31 0031.
 */
public class ResultBean {

    private Error error = new Error();
    private Object data;

    public Error getError() {
        return error;
    }

    public void setError(Error error) {
        this.error = error;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    @Override
    public String toString() {
        return "ResultBean{" +
                "error=" + error +
                ", data=" + data +
                '}';
    }
}
