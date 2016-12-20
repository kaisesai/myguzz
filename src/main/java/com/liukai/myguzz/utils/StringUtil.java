package com.liukai.myguzz.utils;

import javax.servlet.http.HttpServletRequest;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringUtil {

	public static boolean isEmpty(String str) {
		return str == null || "".equals(str);
	}

	public static boolean isNotEmpty(String str) {
		return !isEmpty(str);
	}

	public static int getToday(int defaultValue) {
		SimpleDateFormat df = new SimpleDateFormat("yyyyMMdd");// 设置日期格式
		int today = parseInt(df.format(new Date()), defaultValue);
		return today;
	}

	public static int parseInt(String str, int defaultValue) {
		int number = defaultValue;
		try {
			number = Integer.parseInt(str);
		} catch (Exception e) {
			number = defaultValue;
		}
		return number;
	}

	public static long parseLong(String str, long defaultValue) {
		long number = defaultValue;
		try {
			number = Long.parseLong(str);
		} catch (Exception e) {
			number = defaultValue;
		}
		return number;
	}

	public static Double parseDouble(String str, Double defaultValue) {
		Double number = defaultValue;
		try {
			number = Double.parseDouble(str);
		} catch (Exception e) {
			number = defaultValue;
		}
		return number;
	}

	public static String getUuid() {
		String uuid = UUID.randomUUID().toString();
		uuid = uuid.replaceAll("-", "");
		return uuid;
	}

	public static String genOrderId() {
		String uuid = StringUtil.getUuid();
		String regEx = "[^0-9]";
		Pattern p = Pattern.compile(regEx);
		Matcher m = p.matcher(uuid);
		String uuidNumber = m.replaceAll("").trim();
		uuidNumber = uuidNumber.replaceAll(" ", "");
		String timeStr = String.valueOf(System.currentTimeMillis());
		if (timeStr.length() > 10) {
			timeStr = timeStr.substring(timeStr.length() - 10);
		}

		if (timeStr.startsWith("0")) {
			timeStr = "1" + timeStr.substring(1);
		}

		if (uuidNumber.length() > 10) {
			uuidNumber = uuidNumber.substring(uuidNumber.length() - 10);
		}

		String orderId = timeStr + uuidNumber;

		return orderId;
	}

	public static String toUpperCnCaser(String str) {

		Number o = Integer.parseInt(str);

		String s = new DecimalFormat("#.00").format(o);
		s = s.replaceAll("\\.", "");
		char[] digit = { '零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖' };
		String unit = "仟佰拾兆仟佰拾亿仟佰拾万仟佰拾元角分";
		int l = unit.length();
		StringBuffer sb = new StringBuffer(unit);
		for (int i = s.length() - 1; i >= 0; i--) {
			sb = sb.insert(l - s.length() + i, digit[(s.charAt(i) - 0x30)]);
		}
		s = sb.substring(l - s.length(), l + s.length());
		s = s.replaceAll("零[拾佰仟]", "零").replaceAll("零{2,}", "零").replaceAll("零([兆万元])", "$1").replaceAll("零[角分]", "");
		return s;
	}

	public static int getNumber(char c) {
		String str = String.valueOf(c);
		return Integer.parseInt(str);
	}
	/**
	 * 功能: 生成12位长度的logId
	 * @author wusq
	 * @version 创建时间: 2016年10月17日 下午8:31:10
	 *
	 * @return
	 */
	public static String getLogId() {
        return getRandomNum(12);
    }

    /**
     * 获取指定位数随机整数
     *
     * @param len
     * @return
     */
    private static String getRandomNum(int len) {
        return String.valueOf((long) ((Math.random() * 9 + 1) * Math.pow(10, len - 1)));
    }
	
    /**
     * 功能: 获取客户端ip
     * @author wusq
     * @version 创建时间: 2016年10月17日 下午8:35:21
     *
     * @param request
     * @return
     */
    public static String getClientIP(HttpServletRequest request) {
        String fromSources[] = new String[]{"X-Real-IP", "X-Forwarded-For", "Proxy-Client-IP", "WL-Proxy-Client-IP"};
        String ip = request.getHeader("X-Real-IP");
        for(String source : fromSources) {
            if (isNotEmpty(request.getHeader(source))) {
                ip = request.getHeader(source);
                break;
            }
        }
        if(isEmpty(ip)) {
            ip = request.getRemoteAddr();
        }
        if("127.0.0.1".equals(ip) || "0:0:0:0:0:0:0:1".equals(ip)) {
            try {
                ip = InetAddress.getLocalHost().getHostAddress();
            } catch (UnknownHostException e) {
                e.printStackTrace();
            }
        }
        return ip;
    }
    
	public static void main(String[] args) {
		System.out.println(genOrderId());
		System.out.println(toUpperCnCaser("100"));
	}

}
