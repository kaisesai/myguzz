package com.liukai.myguzz.rmi;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import java.rmi.RemoteException;

/**
 * Created by Administrator on 2016/8/21 0021.
 */

public class RMIServer {
    public static void main(String[] args) throws NamingException {
        try {
            System.out.println("RMI server start...");
            WarehouseServerImpl warehouseServer = new WarehouseServerImpl();

            System.out.println("server registe...");
            Context context = new InitialContext();

            context.bind("rmi:central", warehouseServer);
            System.out.println("wait for client connection...");
        } catch (RemoteException e) {
            e.printStackTrace();
        }

    }
}

