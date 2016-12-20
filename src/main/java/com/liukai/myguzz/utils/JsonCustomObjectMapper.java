package com.liukai.myguzz.utils;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * 功能: 自定义Jackson的ObjectMapper，添加默认设置，如将空字符串转成""等
 *
 * @author guoeq
 * @version 创建时间: 2016年6月6日上午11:42:03
 *
 */
public class JsonCustomObjectMapper extends ObjectMapper{
	private static final long serialVersionUID = 4313735996789302489L;
	
	public JsonCustomObjectMapper() {
		super();
		//设置输入时忽略在JSON字符串中存在但Java对象实际没有的属性
		this.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES,false);
		//允许空字符串可以等价于JSON null
//		this.configure(DeserializationFeature.ACCEPT_EMPTY_STRING_AS_NULL_OBJECT, true);
		//允许单引号
//		this.configure(JsonParser.Feature.ALLOW_SINGLE_QUOTES, true);
		//字段和值都加引号
//		this.configure(JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);
		// 数字也加引号
		//this.configure(JsonGenerator.Feature.WRITE_NUMBERS_AS_STRINGS, true);
		//this.configure(JsonGenerator.Feature.QUOTE_NON_NUMERIC_NUMBERS, true);
		// 空值处理为空串
//		this.getSerializerProvider().setNullValueSerializer(new JsonSerializer<Object>() {
//			@Override
//			public void serialize(Object value, JsonGenerator jg, SerializerProvider sp) throws IOException, JsonProcessingException {
//				jg.writeString("");
//			}
//		});
		//设置日期转换yyyy-MM-dd HH:mm:ss  
//        setDateFormat(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"));
	}
}
