package com.liukai.myguzz.service;

/**
 * Created by Administrator on 2016/8/21 0021.
 */
public class HelloServiceImpl implements IHelloService {

    @Override
    public String hello(String name) {
        System.out.println("[HelloServiceImpl] Hello I'm " + name);
        return "Hello " + name;
    }
}
