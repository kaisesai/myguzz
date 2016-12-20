package com.liukai.myguzz.utils;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class MD5Util {
	private static final Log log = LogFactory.getLog(MD5Util.class);

	private static char[] Digit = new char[] { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' };

	public MD5Util() {
	}

	public static String getMd5Sum(String inputStr) throws NoSuchAlgorithmException {
		MessageDigest digest = MessageDigest.getInstance("MD5");
		byte[] inputStrByte = inputStr.getBytes();
		digest.update(inputStrByte, 0, inputStrByte.length);
		byte[] md5sum = digest.digest();
		StringBuffer sb = new StringBuffer();

		for (int i = 0; i < 16; ++i) {
			char[] ob = new char[] { Digit[md5sum[i] >> 4 & 15], Digit[md5sum[i] & 15] };
			String s = new String(ob);
			sb.append(s);
		}

		return sb.toString();
	}

	public static String md5(String str) {
		MessageDigest md5 = null;

		try {
			md5 = MessageDigest.getInstance("MD5");
			md5.update(str.getBytes("UTF-8"));
		} catch (NoSuchAlgorithmException var8) {
			log.error("", var8);
			throw new RuntimeException(var8.getMessage());
		} catch (UnsupportedEncodingException var9) {
			var9.printStackTrace();
			throw new RuntimeException(var9.getMessage());
		}

		byte[] encodedValue = md5.digest();
		int j = encodedValue.length;
		char[] finalValue = new char[j * 2];
		int k = 0;

		for (int i = 0; i < j; ++i) {
			byte encoded = encodedValue[i];
			finalValue[k++] = Digit[encoded >> 4 & 15];
			finalValue[k++] = Digit[encoded & 15];
		}

		return new String(finalValue);
	}

	public static boolean verify(String text, String sign) {
		String mysign = md5(text);
		return mysign.equals(sign);
	}

	public static String md5(File file) throws IOException {
		FileInputStream is = new FileInputStream(file);
		MessageDigest md5 = null;

		try {
			md5 = MessageDigest.getInstance("MD5");
			boolean encodedValue = false;
			byte[] j = new byte[1024];

			while (true) {
				int var13 = is.read(j);
				if (var13 > 0) {
					md5.update(j, 0, var13);
				}

				if (var13 == -1) {
					is.skip(0L);
					break;
				}
			}
		} catch (NoSuchAlgorithmException var11) {
			var11.printStackTrace();
			throw new RuntimeException(var11.getMessage());
		} finally {
			is.close();
		}

		byte[] var14 = md5.digest();
		int var15 = var14.length;
		char[] finalValue = new char[var15 * 2];
		int k = 0;

		for (int i = 0; i < var15; ++i) {
			byte encoded = var14[i];
			finalValue[k++] = Digit[encoded >> 4 & 15];
			finalValue[k++] = Digit[encoded & 15];
		}

		return new String(finalValue);
	}
}
