package com.liukai.myguzz.utils;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.guzz.util.StringUtil;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Map.Entry;
import java.util.TreeMap;

/**
 * Created by linpyi on 2015/3/17. log-back
 * 
 * <pre>
 * 组织参数：
 * TreeMap<String,String> treeMap = new TreeMap<>();
 *             treeMap.put("jsonStr",jsonStr);
 *             treeMap.put("platform",platform);
 *             treeMap.put("cmsType",String.valueOf(cmsType));
 *             treeMap.put("ts",ts);
 *             treeMap.put("appKey",appKey);
 * 
 * 
 * 
 * 调用验签：
 * if(!JdbMd5Util.verify(treeMap, sign, PropertiesUtil.getValue("cms.discovery.key").toString())) {
 *             log.warn("验签失败");
 *             return new CheckResult(500, "签名验证失败，请重试!");
 *         }
 * 
 * 生成验签：
 * 调用md5方法
 * 
 * </pre>
 */
public class JdbMd5Util {
	private static final Log log = LogFactory.getLog(JdbMd5Util.class);

	public static String md5(String str) {

		String encryptedStr = MD5Util.md5(str);
		return encryptedStr;
	}


	public static String md5(String str, String key) {
		String oldStr = str + key;
		// log.info("加密前="+oldStr);
		String encryptedStr = MD5Util.md5(oldStr);
		// log.info("加密后="+encryptedStr);
		return encryptedStr;
	}

	public static void main(String[] args){
		TreeMap<String, String> params = new TreeMap<>();
		String sign = md5(params, "123456");
		System.out.println(sign);
	}

	public static String md5(TreeMap<String, String> params, String key) {
        StringBuilder md5Str=new StringBuilder();
		for (Entry<String, String> entry : params.entrySet()) {
            md5Str.append(StringUtil.isEmpty(entry.getValue()) ? "" : entry.getValue()).append("|");
		}
        md5Str.append(key);
//		log.info("加密前=" + oldStr);
		String encryptedStr = MD5Util.md5(md5Str.toString());
//		log.info("加密后=" + encryptedStr);
		return encryptedStr;
	}

	/**
	 * 功能: 签名，格式：key=value&key=value&...&appkey=key
	 * @author wusq
	 * @version 创建时间: 2016年10月20日 下午6:27:44
	 *
	 * @param params
	 * @param key
	 * @return
	 */
	public static String md5WithParasName(TreeMap<String, String> params, String key) {
		StringBuilder md5Str = new StringBuilder();
		String value="";
		for(Entry<String, String> entry : params.entrySet()) {
			try {
				value=URLEncoder.encode(StringUtil.isEmpty(entry.getValue()) ? "" : entry.getValue(),"utf-8");
			} catch (UnsupportedEncodingException e) {
			}

			md5Str.append(entry.getKey()).append("=")
					.append(value)
					.append("&");
		}
		md5Str.append("appkey=").append(key);
		return MD5Util.md5(md5Str.toString());
	}

	/**
	 * 功能: 签名，格式: privateKey|value1|value2....
	 * @author wusq
	 * @version 创建时间: 2016年11月4日 下午4:02:17
	 *
	 * @param params
	 * @param key
	 * @return
	 */
	public static String md5WithPrefixKey(TreeMap<String, String> params, String key) {
		StringBuilder md5Str = new StringBuilder(key);
		for(Entry<String, String> entry : params.entrySet()) {
			md5Str.append("|").append(entry.getValue());
		}

		return MD5Util.md5(md5Str.toString());
	}

	public static boolean verify(TreeMap<String, String> params, String md5, String key) {
		String encryptedStr = md5(params, key);
		return encryptedStr.equals(md5);
	}

	public static boolean verifyCaseIns(TreeMap<String, String> params, String md5, String key) {
		String encryptedStr = md5(params, key).toUpperCase();
		return encryptedStr.equals(md5);
	}

	public static boolean verify(String str, String md5, String key) {
		String encryptedStr = md5(str, key);
		return encryptedStr.equals(md5);
	}
}
