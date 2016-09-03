package com.liukai.myguzz.utils;

import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

/**
 * HttpUtils工具类，方便使用POST、GET等方法
 * Created by Administrator on 2016/9/3 0003.
 */
public class HttpUtils {


    public static void main(String[] args) throws IOException {

        //1.GET请求
        CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet("http://localhost:8082/myguzz/agentStatus/queryList");
        try {
            CloseableHttpResponse response = httpClient.execute(httpGet);
            System.out.println(response.getStatusLine());
            HttpEntity entity = response.getEntity();

            System.out.println(entity.getContentEncoding());
            System.out.println(entity.getContentLength());
            System.out.println(entity.getContentType());
            InputStream is = entity.getContent();
            BufferedReader br = new BufferedReader(new InputStreamReader(is, "UTF-8"));
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }

            EntityUtils.consume(entity);
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            httpClient.close();
        }
    }
}
