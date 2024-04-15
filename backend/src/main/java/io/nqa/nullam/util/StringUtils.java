package io.nqa.nullam.util;

public class StringUtils {

    /**
     * Check if any of given strings is null or blank.
     *
     * @param args
     * @return
     */
    public static boolean isAnyStringBlank(String ... args) {
        for (String str : args) {
            if (str == null || str.trim().isBlank())
                return true;
        }
        return false;
    }
}
