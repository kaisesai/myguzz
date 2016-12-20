package com.liukai.myguzz.utils;

import com.guzzservices.util.HttpClientUtils;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.log4j.Logger;
import org.guzz.util.FileUtil;

import java.util.Map;

public class HttpRequestUtil {
	
	private static Logger logger = Logger.getLogger(HttpRequestUtil.class);
	
	/**
	 * 功能: 发送请求，返回clazz对象
	 * @author wusq
	 * @version 创建时间: 2016年10月20日 下午6:58:38
	 *
	 * @param url
	 * @param params
	 * @param clazz
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public static <T> T postUrl(String url, Map<String, String> params, Class<T> clazz) {
		T rsp = null;
		try {
			String result = postUrl(url, params);
			if(clazz.equals(String.class)) { //字符串直接返回，不做json解析
				rsp = (T) result;
			} else {
				rsp = JsonConverUtil.Json2Bean(result, clazz);
			}
		} catch (Exception e) {
			String errMsg = String.format("{\"service_url\": \"%s\", \"service_param\": %s, \"service_errmsg\": %s}", url, params, "request api exception!");
			logger.error(errMsg, e);
			// 接入告警日志
			// MonitorLogUtil.error(MonitorLogEnum.COMMON_INTERFACE_ERROR, errMsg);
			/*try {
				rsp = clazz.newInstance();
				Field field = clazz.getDeclaredField("error");
				field.setAccessible(true);
				if(e instanceof BusinessException) { //json解析数据抛出的异常
					field.set(rsp, Error.DATA_PARSED_ERROR);
				} else {
					field.set(rsp, Error.REQUEST_ERROR);
				}
			} catch (Exception e1) {
				logger.error("Instantiate response object with reflection error!");
				throw new BusinessException("接口请求异常", e1);
			}*/
			throw new RuntimeException("接口请求异常", e);
		}
		return rsp;
	}
	
	public static <T> T getUrl(String url, Map<String, String> params, Class<T> clazz) {
		T rsp = null;
		try {
			String result = getUrl(url, params);
			if(clazz.equals(String.class)) { //字符串直接返回，不做json解析
				rsp = (T) result;
			} else {
				rsp = JsonConverUtil.Json2Bean(result, clazz);
			}
		} catch (Exception e) {
			String errMsg = String.format("{\"service_url\": \"%s\", \"service_param\": %s, \"service_errmsg\": %s}", url, params, "request api exception!");
			logger.error(errMsg, e);
			// 接入告警日志
			// MonitorLogUtil.error(MonitorLogEnum.COMMON_INTERFACE_ERROR, errMsg);
			throw new RuntimeException("接口请求异常", e);
		}
		return rsp;
	}
	
	private static String postUrl(String url, Map<String, String> params) throws Exception {
		long portStartTime = PortStartTime.portStartTime();
		String result = "";

		logger.info(String.format("{\"service_url\": \"%s\", \"service_param\": %s}", url, params));
		result = HttpClientUtils.post(url, params, "utf-8");
		logger.info(String.format("{\"service_result\": %s}", result));
		
		processRequestTime(portStartTime, url);
		return result;
	}

	private static String getUrl(String url, Map<String, String> params) throws Exception {
		long portStartTime = PortStartTime.portStartTime();
		String result = "";
		
		logger.info(String.format("{\"service_url\": \"%s\", \"service_param\": %s}", url, params));
		result = HttpClientUtils.get(url, params, "utf-8");
		logger.info(String.format("{\"service_result\": %s}", result));
		
		processRequestTime(portStartTime, url);
		return result;
	}
	
	public static String getUrl(String url, Map<String, String> params,int timeoutInMills) throws Exception {
		long portStartTime = PortStartTime.portStartTime();
		String result = "";
		//addCommonParams(params);
		
		logger.info(String.format("{\"service_url\": \"%s\", \"service_param\": %s}", url, params));
		result = HttpClientUtils.get(url, params, "utf-8",timeoutInMills);
		logger.info(String.format("{\"service_result\": %s}", result));
		
		processRequestTime(portStartTime, url);
		return result;
	}

	private static void addCommonParams(Map<String, String> paramsMap) {
		if (paramsMap == null) {
			return;
		}
	}
	
	public static String postJsonUrl(String url, String json) throws Exception {
		long portStartTime = PortStartTime.portStartTime();
		String result = "";
		CloseableHttpResponse response = null;
		logger.info(String.format("{\"service_url\": \"%s\", \"service_param\": %s}", url, json));
		try {
			CloseableHttpClient httpclient = HttpClients.createDefault();

			HttpEntity entity = null;
			HttpPost httpost = new HttpPost(url);

			StringEntity s = new StringEntity(json);
			s.setContentEncoding("UTF-8");
			s.setContentType("application/json");
			httpost.setEntity(s);
			response = httpclient.execute(httpost);
			entity = response.getEntity();

			if (entity != null) {
				result = FileUtil.readText(entity.getContent(), "UTF-8");
			}
			EntityUtils.consume(entity);
		} finally {
			response.close();
		}
		logger.info(String.format("{\"service_result\": %s}", result));
		
		processRequestTime(portStartTime, url);
		return result;
	}
	
	/**
	 * 功能: 计算请求时间，超过阈值时报警
	 * @author wusq
	 * @version 创建时间: 2016年10月24日 下午9:00:01
	 *
	 * @param portStartTime
	 * @param url
	 */
	private static void processRequestTime(long portStartTime, String url) {
		// if (!PortEndTime.portStartTime(portStartTime, SysConstants.TIMEOUT_OUTPUT_THRESHOLD)) { //超过500ms，输出warn日志
		// 	logger.warn(String.format("response time too long:%d ms --> %s", System.currentTimeMillis() - portStartTime, url));
		// }
		// if(!PortEndTime.portStartTime(portStartTime, SysConstants.TIMEOUT_WARNING_THRESHOLD)) { //超过2s，接入告警系统
		// 	MonitorLogUtil.warn(MonitorLogEnum.COMMON_INTERFACE_TIMEOUT,
		// 			String.format("response time too long:%d ms --> %s", System.currentTimeMillis() - portStartTime, url));
		// }
	}

}
