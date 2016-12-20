package com.liukai.myguzz.utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class PropertiesUtil {

	private Properties props;

	public PropertiesUtil(String fileName) {
		readProperties(fileName);
	}

	private void readProperties(String fileName) {
		InputStream fis = null;
		try {
			props = new Properties();
			// String filePath = ConfigUtil.getWebPath() + ConfigUtil.Config_Dir + fileName;
			String filePath = null;
			fis = new FileInputStream(filePath);
			props.load(fis);
		} catch (Exception e) {
			e.printStackTrace();
			try {
				throw e;
			} catch (Exception throwException) {
				throwException.printStackTrace();
			}

		} finally {
			try {
				fis.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	public String getValue(String name) {
		return props.getProperty(name);
	}
}
