package com.liukai.myguzz.utils;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * <p>
 * Title: 格式化日期共用类
 * </p>
 * <p>
 * Description: 格式化日期共用类
 * </p>
 * <p>
 * Copyright: Copyright (c) 2004
 * </p>
 * <p>
 * Company:
 * </p>
 * 
 * @author twl
 * @version 1.0
 */
public final class DateUtil {

	public static final int SECOND = 1000;
	public static final int MINUTE = SECOND * 60;
	public static final int HOUR = MINUTE * 60;
	public static final int DAY = HOUR * 24;
	public static final int WEEK = DAY * 7;
	public static final int YEAR = DAY * 365; // or 366 ???

	public static final long GMT_VIETNAM_TIME_OFFSET = HOUR * 7;

	private static long SERVER_TIME_OFFSET = 0;

	/*
	 * 日期的格式
	 */
	/** 日期格式，ddMMyyyy: "dd-MM-yyyy" */
	public static final String ddMMyyyyStr = "dd-MM-yyyy";

	/** 日期格式， "mm/dd/yyyy" */
	public static final String mmddyyyyStr = "MM/dd/yyyy";
	public static final String mmddyyyyHHMMSS = "MM/dd/yyyy HH:mm:ss";

	/** 日期格式，yyyyMMdd: "yyyy-MM-dd" */
	public static final String yyyyMMddStr = "yyyy-MM-dd";

	/** 日期格式，yyyyMMdd: "yyyy-MM-dd" */
	public static final String yyyyMMddStr1 = "yyyy/MM/dd";

	/** 日期格式，yyyyMMdd: "yyyy-M-d" */
	public static final String yyyyMdStr = "yyyy-M-d";

	/** 日期格式，yyyyMMddhhmmss: "yyyy-MM-dd HH:mm:ss" */
	public static final String yyyyMMddhhmmssStr = "yyyy-MM-dd HH:mm:ss";

	/** 日期格式，yyyyMMddhhmmss: "yyyyMMddhhmmss" */
	public static final String yyyyMMddhhmmss = "yyyyMMddHHmmss";
	/** HH:mm:ss */
	public static final String hhmmssStr = "HH:mm:ss";

	/** 日期格式，yyyyMMddhhmmsss: "yyyy-MM-dd HH:mm:ss:s" */
	public static final String yyyyMMddhhmmsssStr = "yyyy-MM-dd HH:mm:ss:s";

	/** 日期格式，MMddhhmm: "MM-dd HH:mm" */
	public static final String MMddhhmmStr = "MM-dd HH:mm";

	/** 日期格式，yyyymmddhhmm: "yyyy-MM-dd HH:mm" */
	public static final String yyyymmddhhmmStr = "yyyy-MM-dd HH:mm";

	/** 日期格式，yy: "yy" */
	public static final String yyStr = "yy";

	/** 日期格式，yyyyMM: "yyyy-MM" */
	public static final String yyyyMM = "yyyyMM";

	/** 日期格式，"yyyy-MM" */
	public static final String YYYYMM = "yyyy-MM";

	/** 日期格式，yyyyMMdd: "yyyyMMdd" */
	public static final String yyyyMMdd = "yyyyMMdd";

	public static final String yyyyMMMddhh = "yyyy-MM-dd HH";

	private static DateFormat yyyyMMMddhhFormat = new SimpleDateFormat(yyyyMMMddhh);
	private static DateFormat hhmmssStrFormat = new SimpleDateFormat(hhmmssStr);
	private static DateFormat ddMMyyyyFormat = new SimpleDateFormat(ddMMyyyyStr);
	private static DateFormat mmddyyyyFormat = new SimpleDateFormat(mmddyyyyStr);
	private static DateFormat mmddyyyyHHMMSSFormat = new SimpleDateFormat(mmddyyyyHHMMSS);

	private static DateFormat yyyyMMddFormat = new SimpleDateFormat(yyyyMMddStr);
	private static DateFormat yyyyMdFormat = new SimpleDateFormat(yyyyMdStr);
	private static DateFormat yyyymmddhhmmssFormat = new SimpleDateFormat(yyyyMMddhhmmssStr);
	private static DateFormat yyyymmddhhmmssFormatreal = new SimpleDateFormat(yyyyMMddhhmmss);
	private static DateFormat yyyymmddhhmmsssFormat = new SimpleDateFormat(yyyyMMddhhmmsssStr);

	private static DateFormat mmddhhmmFormat = new SimpleDateFormat(MMddhhmmStr);
	private static DateFormat yyyymmddhhmmFormat = new SimpleDateFormat(yyyymmddhhmmStr);
	private static DateFormat yyFormat = new SimpleDateFormat(yyStr);
	private static DateFormat dateFormat = SimpleDateFormat.getDateInstance(SimpleDateFormat.DEFAULT);
	private static DateFormat datetimeFormat = SimpleDateFormat.getDateTimeInstance(SimpleDateFormat.DEFAULT,
			SimpleDateFormat.DEFAULT);

	private static DateFormat yyyyMMFormat = new SimpleDateFormat(yyyyMM);

	private static DateFormat YYYYMMFormat = new SimpleDateFormat(YYYYMM);

	private static DateFormat yyyyMMdd_Format = new SimpleDateFormat(yyyyMMdd);
	private static DateFormat mmddyyyyStr_Format = new SimpleDateFormat(mmddyyyyStr);

	private DateUtil() {
	}

	public static synchronized String getDateHHMMSS(Date date) {
		if (date != null) {
			return hhmmssStrFormat.format(date);
		} else {
			return "";
		}
	}

	public static synchronized String getDateDDMMYYYY(Date date) {
		if (date != null) {
			return ddMMyyyyFormat.format(date);
		} else {
			return "";
		}
	}

	public static synchronized String getDateMMDDYYYY(Date date) {
		if (date != null) {
			return mmddyyyyFormat.format(date);
		} else {
			return "";
		}
	}

	/**
	 * 给date添加(days,hours,minutes , seconds)时间偏移
	 * 
	 * @param date
	 * @param days
	 * @param hours
	 * @param minutes
	 * @param seconds
	 * @return Date
	 */
	public static synchronized Date Add(Date date, int days, int hours, int minutes, int seconds) {

		Date dt = date;
		if (dt != null) {
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(dt);

			if (days != 0) {
				calendar.add(Calendar.DATE, days);
			}
			if (hours != 0) {
				calendar.add(Calendar.HOUR, hours);
			}
			if (minutes != 0) {
				calendar.add(Calendar.MINUTE, minutes);
			}
			if (seconds != 0) {
				calendar.add(Calendar.SECOND, seconds);
			}
			dt = calendar.getTime();
		}
		return dt;
	}

	public static synchronized Date set(Date date, int days, int hours, int minutes, int seconds) {

		Date dt = date;
		if (dt != null) {
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(dt);

			if (days >= 0) {
				calendar.set(Calendar.DAY_OF_MONTH, days);
			}
			if (hours >= 0) {
				calendar.set(Calendar.HOUR_OF_DAY, hours);
			}
			if (minutes >= 0) {
				calendar.set(Calendar.MINUTE, minutes);
			}
			if (seconds >= 0) {
				calendar.set(Calendar.SECOND, seconds);
			}
			dt = calendar.getTime();
		}
		return dt;
	}

	/**
	 * 得到date后的一个自然天
	 * 
	 * @param date
	 */
	public static synchronized Date getNextDay(Date date) {
		Date dt = date;
		if (dt != null) {
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(dt);
			calendar.set(Calendar.HOUR_OF_DAY, 0);
			calendar.set(Calendar.MINUTE, 0);
			calendar.set(Calendar.SECOND, 0);
			calendar.add(Calendar.DATE, 1);
			dt = calendar.getTime();
		}
		return dt;
	}

	/**
	 * 得到 2005-01-01 00:00:00的短日期
	 * 
	 * @param date
	 * @return
	 */
	public static synchronized Date getShortDate(Date date) {
		if (date != null) {
			Date dt = (Date) date.clone();

			dt.setHours(0);
			dt.setMinutes(0);
			dt.setSeconds(0);

			return dt;
		} else {
			return null;
		}
	}

	public static synchronized String getDateYYYYMMDD(Date date) {
		if (date != null) {
			return yyyyMMddFormat.format(date);
		} else {
			return "";
		}
	}

	public static synchronized String getDateYYYYMD(Date date) {
		if (date != null) {
			return yyyyMdFormat.format(date);
		} else {
			return "";
		}
	}

	public static synchronized String getDateYYYYMMDDHHMMSSS(Date date) {
		if (date != null) {
			return yyyymmddhhmmsssFormat.format(date);
		} else {
			return "";
		}
	}

	public static synchronized String getDateYYYYMMDDHHMMSS(Date date) {
		if (date != null) {
			return yyyymmddhhmmssFormat.format(date);
		} else {
			return "";
		}
	}

	public static synchronized String getDateYYYYMMDDHHMMSSreal(Date date) {
		if (date != null) {
			return yyyymmddhhmmssFormatreal.format(date);
		} else {
			return "";
		}
	}

	public static synchronized Date getDateFormat(Date date) {
		if (date != null) {
			try {
				return yyyymmddhhmmssFormat.parse(yyyymmddhhmmssFormat.format(date));
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return null;
		} else {
			return null;
		}
	}

	public static synchronized Date getDateTimeYYYYMMDDHHMMSS(String date) {
		if (date != null) {
			try {
				return yyyymmddhhmmssFormat.parse(date);
			} catch (Exception e) {
				return null;
			}
		} else {
			return null;
		}
	}

	public static synchronized Date getDateTimeYYYYMMDDHHMM(String date) {
		if (date != null) {
			try {
				return yyyymmddhhmmFormat.parse(date);
			} catch (Exception e) {
				return null;
			}
		} else {
			return null;
		}
	}

	public static void main(String[] args) {
		System.out.println(DateUtil.getDateNoSencond(new Date(System.currentTimeMillis())));
		System.out.println(DateUtil.getDateYYYYMMDDHHMMSSreal(DateUtil.Add(new Date(), 0, 0, 10, 0)));

		Date startPremiumDate1 = DateUtil.getDateByStrYYYYMMDD("2015-07-07");
		int dateSpace1 = (int) (DateUtil.getDateSpaceSecond(startPremiumDate1, DateUtil.getShortDate(new Date()))
				/ 86399);
		System.out.println(dateSpace1 + " " + dateSpace1);

		System.out.println(getDaysBySpreadInfo(1459139976000l, 1466870399000l));
		System.out.println(getDaysBySpreadInfo(1459094400000l,1459267199000l));
		System.out.println(getDaysBySpreadInfo(1459180799000l,1459180800000l));
		System.out.println(getDaysBySpreadInfo(1459267199000l, 1490803199000l));

	}

	public static synchronized String getDateYY(Date date) {
		if (date != null) {
			return yyFormat.format(date);
		} else {
			return "";
		}
	}

	public static synchronized String getDateindex(Date date) {
		if (date != null) {
			return yyyymmddhhmmssFormat.format(date);
		} else {
			return "";
		}
	}

	public static synchronized String getDateSearch(Date date) {
		if (date != null) {
			return mmddhhmmFormat.format(date);
		} else {
			return "";
		}
	}

	public static synchronized Date getDateNoSencond(String date) {
		if (date != null) {
			try {
				return yyyymmddhhmmFormat.parse(date);
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return null;

	}

	public static synchronized String getDateNoMinute(Date date) {
		if (date != null) {
			return yyyyMMMddhhFormat.format(date);
		}
		return "";
	}

	public static synchronized String getDateNoSencond(Date date) {
		if (date != null) {
			return yyyymmddhhmmFormat.format(date);
		} else {
			return "";
		}
	}

	public static synchronized String getYearAndMonth(Date date) {
		if (date != null) {
			return yyyyMMFormat.format(date);
		} else {
			return "";
		}
	}

	public static synchronized String getDateyyyyMMddStr(Date date) {
		if (date != null) {
			return yyyyMMdd_Format.format(date);
		} else {
			return "";
		}
	}

	public static synchronized String getDateStrByFormat(Date date, String formatStr) {
		DateFormat tFormat = new SimpleDateFormat(formatStr);
		if (date != null) {
			return tFormat.format(date);
		} else {
			return "";
		}
	}

	public static synchronized String formatDate(Date date) {
		if (date != null) {
			return dateFormat.format(date);
		} else {
			return "";
		}

	}

	public static synchronized String formatDateTime(Date date) {
		if (date != null) {
			return datetimeFormat.format(date);
		} else {
			return "";
		}
	}

	public static Timestamp getCurrentGMTTimestamp() {
		return new Timestamp(System.currentTimeMillis() - SERVER_TIME_OFFSET);
	}

	public static void updateCurrentGMTTimestamp(Timestamp timeToUpdate) {
		timeToUpdate.setTime(System.currentTimeMillis() - SERVER_TIME_OFFSET);
	}

	public static Date getVietnamDateFromGMTDate(Date date) {
		return new Date(date.getTime() + GMT_VIETNAM_TIME_OFFSET);
	}

	public static Date convertGMTDate(Date gmtDate, int hourOffset) {
		return new Date(gmtDate.getTime() + hourOffset * HOUR);
	}

	public static Timestamp convertGMTTimestamp(Timestamp gmtTimestamp, int hourOffset) {
		return new Timestamp(gmtTimestamp.getTime() + hourOffset * HOUR);
	}

	public static Timestamp getCurrentGMTTimestampExpiredYear(int offsetYear) {
		// return new Timestamp(System.currentTimeMillis() +
		// offsetYear*(365*24*60*60*1000));
		Calendar now = Calendar.getInstance();
		now.add(Calendar.YEAR, offsetYear);
		return new Timestamp(now.getTime().getTime());
	}

	public static Timestamp getCurrentGMTTimestampExpiredMonth(int offsetMonth) {
		Calendar now = Calendar.getInstance();
		now.add(Calendar.MONTH, offsetMonth);
		return new Timestamp(now.getTime().getTime());
	}

	/**
	 * @param Calendar
	 * @return String 2001/12/13 Format
	 */
	public static String CalendarToStr(Calendar cal) {
		SimpleDateFormat format = new SimpleDateFormat("yyyy/MM/dd");
		if (cal != null) {
			Date date = cal.getTime();
			return format.format(date);
		} else {
			return "";
		}
	}

	/**
	 * @param Calendar
	 * @return a Sunday Calendar in the Week
	 */
	public static Calendar starCalOfWeek(Calendar day) {
		int temp = day.get(Calendar.DAY_OF_WEEK);
		switch (temp) {
		case 1:
			return day;
		case 2:
			day.add(Calendar.DATE, -1);
			return day;
		case 3:
			day.add(Calendar.DATE, -2);
			return day;
		case 4:
			day.add(Calendar.DATE, -3);
			return day;
		case 5:
			day.add(Calendar.DATE, -4);
			return day;
		case 6:
			day.add(Calendar.DATE, -5);
			return day;
		case 7:
			day.add(Calendar.DATE, -6);
			return day;
		default:
			return day;
		}
	}

	/**
	 * @param Calendar
	 * @return a Satday Calendar in the Week
	 */
	public static Calendar endCalOfWeek(Calendar day) {
		int temp = day.get(Calendar.DAY_OF_WEEK);
		switch (temp) {
		case 1:
			day.add(Calendar.DATE, 6);
			return day;
		case 2:
			day.add(Calendar.DATE, 5);
			return day;
		case 3:
			day.add(Calendar.DATE, 4);
			return day;
		case 4:
			day.add(Calendar.DATE, 3);
			return day;
		case 5:
			day.add(Calendar.DATE, 2);
			return day;
		case 6:
			day.add(Calendar.DATE, 1);
			return day;
		case 7:
			return day;
		default:
			return day;
		}
	}

	public static Date StrToDate(String str) {
		if (str.length() == 0) {
			return null;
		}
		int start = str.indexOf('-');
		String year = str.substring(0, start);
		start++;
		int start1 = str.indexOf('-', start);
		String month = str.substring(start, start1);
		String day = str.substring(start1 + 1);
		Calendar cal = Calendar.getInstance();

		// cal.setTime(null);

		cal.set(Calendar.YEAR, Integer.parseInt(year));
		cal.set(Calendar.MONTH, Integer.parseInt(month) - 1);
		cal.set(Calendar.DATE, Integer.parseInt(day));

		return new Timestamp(cal.getTime().getTime());
	}

	public static Date StrToDateTime(String str) {
		if (str.length() == 0) {
			return null;
		}
		int start = str.indexOf('-');
		String year = str.substring(0, start);
		start++;
		int start1 = str.indexOf('-', start);
		String month = str.substring(start, start1);
		String day = str.substring(start1 + 1);
		Date date = new Date();
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.set(Calendar.YEAR, Integer.parseInt(year));
		cal.set(Calendar.MONTH, Integer.parseInt(month) - 1);
		cal.set(Calendar.DATE, Integer.parseInt(day));

		return new Timestamp(cal.getTime().getTime());
	}

	public static Calendar StrToCalendar(String str) {
		if (str.length() == 0) {
			return null;
		}
		int start = str.indexOf('/');
		String year = str.substring(0, start);
		start++;
		int start1 = str.indexOf('/', start);
		String month = str.substring(start, start1);
		String day = str.substring(start1 + 1);
		Date date = new Date();
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		cal.set(Calendar.MONTH, Integer.parseInt(month) - 1);
		cal.set(Calendar.DATE, Integer.parseInt(day));
		return cal;
	}

	/**
	 * @param Calendar
	 * @return String Sun Mon etc. Format
	 */
	public static String dayOfWeek(Calendar day) {
		int temp = day.get(Calendar.DAY_OF_WEEK);
		switch (temp) {
		case 1:
			return "Sun";
		case 2:
			return "Mon";
		case 3:
			return "Tue";
		case 4:
			return "Wed";
		case 5:
			return "Thu";
		case 6:
			return "Fri";
		case 7:
			return "Sat";
		default:
			return "";
		}
	}

	/**
	 * @param Calendar
	 * @return String Sun Mon etc. Format
	 */
	public static String dayOfWeekCn(Calendar day) {
		int temp = day.get(Calendar.DAY_OF_WEEK);
		switch (temp) {
		case 1:
			return "日";
		case 2:
			return "一";
		case 3:
			return "二";
		case 4:
			return "三";
		case 5:
			return "四";
		case 6:
			return "五";
		case 7:
			return "六";
		default:
			return "";
		}
	}

	/**
	 * @param String
	 *            Date Format 2001/12/13
	 * @return String Sun Mon etc. Format
	 */
	public static String dayOfWeek(String inDay) {
		Calendar cal = Calendar.getInstance();

		cal.setTime(StrToDate(inDay));
		int temp = cal.get(Calendar.DAY_OF_WEEK);
		switch (temp) {
		case 1:
			return "Sun";
		case 2:
			return "Mon";
		case 3:
			return "Tue";
		case 4:
			return "Wed";
		case 5:
			return "Thu";
		case 6:
			return "Fri";
		case 7:
			return "Sat";
		default:
			return "";
		}
	}

	public static Timestamp StrToTimestamp(String timestampStr, String pattern) throws ParseException {
		Date date = null;
		SimpleDateFormat format = new SimpleDateFormat(pattern);
		try {
			date = format.parse(timestampStr);
		} catch (ParseException e) {
			throw e;
		}
		return date == null ? null : new Timestamp(date.getTime());
	}

	/**
	 * 将字符串型按一定的格式转换成日期型
	 *
	 * @param sDate
	 *            //字符串型
	 * @param pattern
	 *            //格式
	 * @return //返回日期型
	 * @throws ParseException
	 *             //异常抛出
	 */
	public static Date StrToDate(String sDate, String pattern) {
		Date date = null;
		SimpleDateFormat format = new SimpleDateFormat(pattern);
		try {
			date = format.parse(sDate);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return date == null ? null : date;
	}

	/**
	 * 将字符串型按一定的格式转换成日期型
	 *
	 * @param sDate
	 *            //字符串型
	 * @param vPattern
	 *            //格式:如果输入值为""，则缺省赋值为"yyyy-MM-dd"
	 * @return //返回boolean型
	 * @throws ParseException
	 *             //异常抛出
	 */
	public static boolean IsDate(String sDate, String vPattern) {
		boolean bDate = true;
		String pattern;

		if (vPattern == null || vPattern.length() == 0) {
			pattern = "yyyy-MM-dd";
		} else {
			pattern = vPattern;
		}

		Date date = null;
		SimpleDateFormat format = new SimpleDateFormat(pattern);
		format.setLenient(false);
		try {
			date = format.parse(sDate);
			bDate = true;
		} catch (ParseException e) {
			bDate = false;
		}

		return bDate;
	}

	/*
	 * 返回当前日期(时间)
	 */
	public static Date getNowDateTime() {
		Date dnow = new Date();

		return dnow;
	}

	/*
	 * Liusj 2005-10-27 为不影响排序,新增和修改产品,包括修改目录,都统一把排序时间 设置成一个固定的值,'2005-08-19'
	 */
	public static Date getDateTimeForSortDate() {
		Date dnow = new Date();
		dnow = StrToDate("2005-08-19");

		return dnow;
	}

	/*
	 * 返回当前日期(时间)
	 */
	public static Calendar getNowCalendar() {
		Calendar calendar = Calendar.getInstance();

		return calendar;
	}

	/**
	 * 取得当前的日期
	 *
	 * @return Date //返回当前日期
	 */
	public static Date getNowDate() {
		Date dnow = new Date();
		return dnow;

	}

	public static long getaLongTime() {
		return System.currentTimeMillis();
	}

	/**
	 * 取得两个时间的间隔，单位：毫秒
	 *
	 * @param dFirst
	 *            //第一个时间
	 * @param dSecond
	 *            //第二个时间
	 * @return long //返回时间间隔，单位：毫秒
	 */
	public static long getDateSpace(Date dFirst, Date dSecond) {
		long lspace = 0;

		if (dFirst != null && dSecond != null) {
			lspace = dFirst.getTime() - dSecond.getTime();
		}

		return lspace;
	}

	/**
	 * 取得两个时间的间隔，单位：秒
	 *
	 * @param dFirst
	 *            //第一个时间
	 * @param dSecond
	 *            //第二个时间
	 * @return long //返回时间间隔，单位：秒
	 */
	public static long getDateSpaceSecond(Date dFirst, Date dSecond) {
		long lspace = 0;

		if (dFirst != null && dSecond != null) {
			lspace = (dFirst.getTime() - dSecond.getTime()) / 1000;
		}

		return lspace;
	}

	/**
	 * 当前时间是否在一个日期时间范围内
	 *
	 * @param curDate
	 * @param vStartDate
	 * @param vEndDate
	 * @return
	 */
	public static boolean between(Date curDate, Date vStartDate, Date vEndDate) {
		boolean bRet = false;

		if (curDate != null) {
			if (vStartDate == null && vEndDate == null) {
				bRet = true;
			} else if (vStartDate == null) {
				if (!curDate.after(vEndDate)) {
					bRet = true;
				}
			} else if (vEndDate == null) {
				if (!curDate.before(vStartDate)) {
					bRet = true;
				}
			} else if (!curDate.before(vStartDate) && !curDate.after(vEndDate)) {
				bRet = true;
			}
		}

		return bRet;
	}

	/** 以下是Vip Club's Job用到的日期函数 */

	/**
	 * 取得时间
	 */
	public static Date getDate(Date date, int time, String status) {
		Calendar tempdate = Calendar.getInstance();
		tempdate.setTime(date);
		if (status.equals("YEAR")) {
			tempdate.add(Calendar.YEAR, time);
		} else if (status.equals("MONTH")) {
			tempdate.add(Calendar.MONTH, time);
		} else {
			tempdate.add(Calendar.DATE, time);
		}
		Date yesterday = tempdate.getTime();
		return yesterday;
	}

	/**
	 * 常用的格式化日期
	 *
	 * @param date
	 * @return
	 */
	public static String getDateTimeNormal(Date date) {
		return formatDateByFormat(date, "yyyy-MM-dd HH:mm:ss");
	}

	/**
	 * 以指定的格式来格式化日期
	 *
	 * @param date
	 * @param format
	 * @return
	 */
	public static String formatDateByFormat(Date date, String format) {
		String result = "";
		if (date != null) {
			try {
				SimpleDateFormat sdf = new SimpleDateFormat(format);
				result = sdf.format(date);
			} catch (Exception ex) {

				ex.printStackTrace();
			}
		}
		return result;
	}

	/**
	 * 以指定的格式来格式化日期
	 *
	 * @param date
	 * @param format
	 * @return
	 */
	public static String formatDateByFormat(Date date, String format, Locale locale) {
		String result = "";
		if (date != null) {
			try {
				SimpleDateFormat sdf = new SimpleDateFormat(format, locale);
				result = sdf.format(date);
			} catch (Exception ex) {

				ex.printStackTrace();
			}
		}
		return result;
	}

	/**
	 * 将字符串转换成Double
	 * 
	 * @param obj
	 * @return Double
	 */
	public static double DNVL(Object obj) {
		if (obj == null) {
			return new Double(0.0).doubleValue();
		}
		return ((Double) obj).doubleValue();
	}

	/**
	 * 时间想减
	 * 
	 * @param date1
	 *            被减数
	 * @param date2
	 *            减数
	 * @return
	 */
	public static long dateSub(Date date1, Date date2) {
		if (date2 == null)
			date2 = new Date();
		long day = (date1.getTime() - date2.getTime()) / (24 * 60 * 60 * 1000);
		// System.out.println("相差的日期:" + day);
		return day;
	}

	/**
	 * 时间想减
	 * 
	 * @param date1
	 *            被减数
	 * @param date2
	 *            减数
	 * @return
	 */
	public static long dateSub(Date date1) {
		return dateSub(date1, null);
	}

	/**
	 * 给date添加月的时间偏移
	 * 
	 * @param date
	 * @param month
	 *            月
	 * @return Date
	 */
	public static synchronized Date AddMonth(Date date, int month) {

		Date dt = date;
		if (dt != null) {
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(dt);

			if (month != 0) {
				calendar.add(Calendar.MONTH, month);
			}
			dt = calendar.getTime();
		}
		return dt;
	}

	/**
	 * 取上个月第一天 0第一天 1最后一天
	 * 
	 * @return
	 */
	public static String getLastMonthDay(Long state) {
		Calendar cal = Calendar.getInstance();
		Date date = new Date();
		cal.setTime(date);
		int year = 0;
		int month = cal.get(Calendar.MONTH); // 上个月月份
		int day = 0;
		String endDay = "";
		if (state == 0) {
			day = cal.getActualMinimum(Calendar.DAY_OF_MONTH);// 起始天数
			if (month == 0) {
				year = cal.get(Calendar.YEAR) - 1;
				month = 12;
			} else {
				year = cal.get(Calendar.YEAR);
			}
			endDay = year + "-" + month + "-" + day;
		} else {
			Calendar calendar = Calendar.getInstance();
			// 当前月＋1，即下个月
			calendar.add(Calendar.MONTH, 1);
			// 将下个月1号作为日期初始zhii
			calendar.set(Calendar.DATE, 1);
			// 下个月1号减去一天，即得到当前月最后一天
			calendar.add(Calendar.DATE, -1);
			SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
			String day_end = df.format(calendar.getTime());
			Calendar c = Calendar.getInstance();
			c.set(Calendar.DATE, 1);
			endDay = df.format(c.getTime());

		}

		return endDay;
	}

	/**
	 * 得到几月前的时间
	 */
	public static Date getMonthBefore(int month) {
		Calendar now = Calendar.getInstance();
		now.add(Calendar.MONTH, month * -1);
		return now.getTime();
	}

	/**
	 * 得到几天前的时间
	 */
	public static Date getDateBefore(Date inDate, int day) {
		Calendar now = Calendar.getInstance();
		now.setTime(inDate);
		now.set(Calendar.DATE, now.get(Calendar.DATE) - day);
		return now.getTime();
	}

	/**
	 * 得到几天后的时间
	 */
	public static Date getDateAfter(Date inDate, int day) {
		Calendar now = Calendar.getInstance();
		now.setTime(inDate);
		now.set(Calendar.DATE, now.get(Calendar.DATE) + day);
		return now.getTime();
	}

	/**
	 * 返回指定日期的前一天，返回格式按照yyyy-mm-dd格式返回
	 * 
	 * @param d
	 * @param n
	 * @return
	 */
	public static String getPreDateByDate(Date d, int n) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(d);
		calendar.add(Calendar.DAY_OF_MONTH, -n);
		Date yesterDay = calendar.getTime();
		return getDateYYYYMMDD(yesterDay);
	}

	/**
	 * 返回指定日期的前一天，返回格式按照yyyy-mm-dd格式返回
	 * 
	 * @param d
	 * @return
	 */
	public static String getYesterDayByDate(Date d) {
		return getPreDateByDate(d, 1);
	}

	/**
	 * //根据YYYY-MM-DD格式的字符返回java.util.Date类型日期
	 * 
	 * @param strDate
	 * @return
	 */
	public static Date getDateByStrYYYYMMDD(String strDate) {
		if (strDate != null && !"".equals(strDate.trim())) {
			try {
				return yyyyMMddFormat.parse(strDate);
			} catch (Exception e) {

			}
		}
		return null;
	}

	/**
	 * 根据YYYYMMDD格式的字符返回java.util.Date类型日期
	 * 
	 * @param strDate
	 * @return
	 */
	public static Date getDateByStrYMD(String strDate) {
		if (strDate != null) {
			try {
				return yyyyMMdd_Format.parse(strDate);
			} catch (ParseException e) {
			}
		}
		return null;
	}

	/**
	 * 根据mmddyyyyStr格式的字符返回java.util.Date类型日期
	 * 
	 * @param strDate
	 * @return
	 */
	public static Date getDateByStrMMddyyyy(String strDate) {
		if (strDate != null) {
			try {
				return mmddyyyyStr_Format.parse(strDate);
			} catch (ParseException e) {
			}
		}
		return null;
	}

	public static Date getDateByStrMMddyyyyHHMMSS(String strDate) {
		if (strDate != null) {
			try {
				return mmddyyyyHHMMSSFormat.parse(strDate);
			} catch (ParseException e) {
			}
		}
		return null;
	}

	/**
	 * 根据YYYYMM返回Date类型日期
	 * 
	 * @param strDate
	 * @return
	 */
	public static Date getDateByStrYYYYMM(String strDate) {
		if (strDate != null) {
			try {
				return YYYYMMFormat.parse(strDate);
			} catch (ParseException e) {
			}
		}
		return null;
	}

	/**
	 * 得到给定日期月份中总天数
	 * 
	 * @param d
	 */
	public static int getDaysSum(Date d) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(d);
		return cal.getActualMaximum(Calendar.DAY_OF_MONTH);
	}

	/**
	 * 返回当期日期前一个月月份，格式为 YYYY-MM的字符串
	 * 
	 * @param d
	 * @return
	 */
	public static List<String> getBefMoths(Date d, int count) {

		List<String> moths = new ArrayList<String>();
		for (int i = 0; i < count; i++) {
			Calendar calendar = Calendar.getInstance();
			calendar.setTime(d);
			calendar.add(Calendar.MONTH, -(i + 1));
			moths.add(YYYYMMFormat.format(calendar.getTime()));
		}
		return moths;
	}

	/**
	 * 得到 2005-01-01 23:59:59的时间点
	 * 
	 * @param date
	 * @return
	 */
	public static Date getLastSecondDate(Date date) {
		if (date != null) {
			Date dt = (Date) date.clone();
			dt.setHours(23);
			dt.setMinutes(59);
			dt.setSeconds(59);
			return dt;
		} else {
			return null;
		}
	}

	/**
	 * 获取某一天是星期几
	 * 
	 * @param date
	 * @return
	 */
	public static int getDayOfWeek(Date date) {
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		return cal.get(Calendar.DAY_OF_WEEK) - 1;
	}

	public static Date getTime(Date date, int hours, int min, int second) {
		if (date != null) {
			Date dt = (Date) date.clone();
			dt.setHours(hours);
			dt.setMinutes(min);
			dt.setSeconds(second);
			return dt;
		} else {
			return null;
		}
	}

	public static int getDays(long startTime, long endTime) {
		int days = 0;
		days = (int) ((endTime - startTime) / (24 * 60 * 60 * 1000L));
		if ((endTime - startTime) % (24 * 60 * 60 * 1000L) != 0) {
			days++;
		}
		return days;
	}


	/**
	 * 计算赚利差结余时间
	 * @param startTime
	 * @param endTime
	 * @return
	 */
	public static int getDaysBySpreadInfo(long startTime, long endTime) {
		long start = getStartTimeOfDay(startTime);
		long end = getStartTimeOfDay(endTime);

		int days = (int) ((end - start) / (24 * 60 * 60 * 1000L));

		return days;
	}

	/**
	 * 获取当天0时0分0秒0毫秒的毫秒数
	 * @param millis
	 * @return
	 */
	private static long getStartTimeOfDay(long millis){
		Calendar c = Calendar.getInstance();
		c.setTimeInMillis(millis);

		c.set(Calendar.HOUR_OF_DAY, 0);
		c.set(Calendar.MINUTE, 0);
		c.set(Calendar.SECOND, 0);
		c.set(Calendar.MILLISECOND, 0);

		return c.getTimeInMillis();
	}

}
