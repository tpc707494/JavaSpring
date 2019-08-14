package com.example.demo.util;

public class StringUtils {
    public static boolean isNotBlank (String str) {
        return str != null && str.length() > 0 && str.trim().length() > 0;
    }
}
