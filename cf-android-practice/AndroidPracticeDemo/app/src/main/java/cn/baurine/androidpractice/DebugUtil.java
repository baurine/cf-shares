package cn.baurine.androidpractice;

/**
 * Created by baurine on 3/18/16.
 */
public class DebugUtil {

    private static final String TAG = DebugUtil.class.getSimpleName();

    // 因为 assert 默认在 android 上不 work, stack overflow 上建议用 throw new RuntimeException 替代
    public static void assertFalse(boolean assertFalse) {
        assertFalse(assertFalse, "assert false!");
    }

    public static void willNotEnter() {
        assertFalse(false, "will not enter here!");
    }

    public static void assertFalse(boolean assertFalse, String info) {
        if (!assertFalse) {
            throw new RuntimeException(info);
        }
    }
}
