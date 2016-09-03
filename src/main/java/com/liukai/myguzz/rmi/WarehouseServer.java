package com.liukai.myguzz.rmi;

import java.rmi.Remote;
import java.rmi.RemoteException;

/**
 * Created by Administrator on 2016/8/21 0021.
 */
public interface WarehouseServer extends Remote {

    double getPrice(String description) throws RemoteException;
}
