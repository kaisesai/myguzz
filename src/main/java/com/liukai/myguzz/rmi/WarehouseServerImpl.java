package com.liukai.myguzz.rmi;

import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 * Created by Administrator on 2016/8/21 0021.
 */
public class WarehouseServerImpl extends UnicastRemoteObject implements WarehouseServer {

    private static final long serialVersionUID = 1165434583268091719L;
    private Map<String, Double> prices = new ConcurrentHashMap<>();

    WarehouseServerImpl() throws RemoteException {
        prices.put("apple", 6088.00);
        prices.put("huawei", 2999.00);
        prices.put("sanxing", 6010.00);
    }

    @Override
    public double getPrice(String description) throws RemoteException {
        Double price = prices.get(description);
        return price == null ? 0 : price;
    }
}

