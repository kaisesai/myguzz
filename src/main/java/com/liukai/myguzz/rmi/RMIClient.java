package com.liukai.myguzz.rmi;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NameClassPair;
import javax.naming.NamingException;
import java.rmi.RemoteException;
import java.util.Enumeration;

/**
 * Created by Administrator on 2016/8/21 0021.
 */
public class RMIClient {

    public static void main(String[] args) throws NamingException, RemoteException {

        Context context = new InitialContext();
        System.out.println("RMI注册绑定...");

        Enumeration<NameClassPair> e = context.list("rmi://127.0.0.1/");
        while (e.hasMoreElements()) {
            System.out.println(e.nextElement().getName());
        }

        String url = "rmi://localhost/central";
        WarehouseServer warehouseServer = (WarehouseServer) context.lookup(url);
        double price = warehouseServer.getPrice("apple");
        System.out.println("apple's price is " + price);
    }
}
