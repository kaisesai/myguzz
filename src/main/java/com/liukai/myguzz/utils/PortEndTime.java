package com.liukai.myguzz.utils;

public class PortEndTime {
	
	public static boolean portStartTime(long startTime, int threshold) {
		return (System.currentTimeMillis() - startTime) < threshold;
	}
}
