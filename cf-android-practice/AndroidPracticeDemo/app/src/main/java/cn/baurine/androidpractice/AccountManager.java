package cn.baurine.androidpractice;

import android.content.Context;
import android.content.SharedPreferences;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by baurine on 3/18/16.
 */
public class AccountManager {

    // save email and token
    private static final String PREFERENCE_ACCOUNT = "android_practice";

    // auth info key
    private static final String KEY_USER_NAME = "KEY_USER_NAME";

    private SharedPreferences sharedPreferences;
    private String userName;

    ///////////////////////////////////////

    public interface OnAccountListener {
        void onAccountChanged(String userName);
    }

    // List<OnAccountListener> listeners;
    List<OnAccountListener> listeners = new ArrayList<>();

    public void regListener(OnAccountListener listener) {
        listeners.add(listener);
        listener.onAccountChanged(userName);
    }

    private void notifyListeners() {
        for (OnAccountListener listener : listeners) {
            listener.onAccountChanged(userName);
        }
    }

    ///////////////////////////////////////

    public AccountManager(Context context) {
        loadUserName(context);
    }

    private void loadUserName(Context context) {
        sharedPreferences = context.getSharedPreferences(PREFERENCE_ACCOUNT,
                Context.MODE_PRIVATE);
        userName = sharedPreferences.getString(KEY_USER_NAME, null);
    }

    public void setUserName(String userName) {
        this.userName = userName;
        notifyListeners();

        SharedPreferences.Editor editor = sharedPreferences.edit();
        editor.putString(KEY_USER_NAME, userName);
        editor.apply();
    }
}
