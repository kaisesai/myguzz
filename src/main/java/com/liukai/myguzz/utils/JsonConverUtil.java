package com.liukai.myguzz.utils;


import java.io.IOException;

public class JsonConverUtil {

	public static String Bean2Json(Object bean) {
		JsonCustomObjectMapper mapper = new JsonCustomObjectMapper();
		String json = "";
		try {
			json = mapper.writeValueAsString(bean);
		} catch (Exception e) {
			throw new RuntimeException("数据解析失败", e);
		}
		return json;
	}

	public static <T> T Json2Bean(String json, Class<T> clazz) {
		JsonCustomObjectMapper mapper = new JsonCustomObjectMapper();
		T obj = null;
		try {
			obj = mapper.readValue(json, clazz);
		} catch (Exception e) {
			throw new RuntimeException("数据解析失败", e);
		}
		return obj;
	}

	/**
	 * 此方法只是用于检查是否是符合某个DTO类的json格式
	 * 
	 * @param value
	 * @param clazz
	 * @return
	 * @throws IOException
	 */
	public static String isJsonFormat(String value, Class<?> clazz) throws IOException {
		JsonCustomObjectMapper om = new JsonCustomObjectMapper();
		if (value == null || value.trim() == "") {
			return value;
		}
		// 校验格式
		om.readValue(value, clazz);
		return value;
	}

}
