package io.nqa.nullam.util;

public class NumberUtils {

    /**
     * Get length of Integer
     *
     * @param number
     * @return Number of digits in Integer
     */
    public static int intLength(Integer number) {
        return String.valueOf(number).length();
    }

    /**
     * Get length of Long
     *
     * @param number
     * @return Number of digits in Long
     */
    public static int longLength(Long number) {
        return String.valueOf(number).length();
    }
}
