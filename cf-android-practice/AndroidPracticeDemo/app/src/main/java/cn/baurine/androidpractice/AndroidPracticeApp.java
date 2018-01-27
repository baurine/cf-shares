package cn.baurine.androidpractice;

import android.app.Application;

import com.facebook.stetho.Stetho;
import com.squareup.leakcanary.LeakCanary;

import me.drakeet.library.CrashWoodpecker;

/**
 * Created by baurine on 3/18/16.
 */
public class AndroidPracticeApp extends Application {

    private static AndroidPracticeApp instance;

    private AccountManager accountManager;

    @Override
    public void onCreate() {
        super.onCreate();
        instance = this;

        initLibs();

        accountManager = new AccountManager(this);
    }

    @Override
    public void onTerminate() {

        unInitLibs();
        accountManager = null;

        super.onTerminate();
    }

    private void initLibs() {
        // CrashWoodpecker
        CrashWoodpecker.fly().to(this);

        LeakCanary.install(this);

        Stetho.initializeWithDefaults(this);
    }

    private void unInitLibs() {

    }

    ///////////////////////////////////////

    public static AccountManager getAccountManager() {
        return instance.accountManager;
    }

}
