package cn.baurine.androidpractice;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;

import butterknife.ButterKnife;
import butterknife.OnClick;

public class MainActivity extends AppCompatActivity {

    public static void launch(Context from) {
        Intent intent = new Intent(from, MainActivity.class);
        from.startActivity(intent);
    }

    ///////////////////////////////////////////

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ButterKnife.bind(this);
    }

    ///////////////////////////////////////////

    @OnClick(R.id.btn_test_woodpecker)
    public void testWoodpecker() {
        DebugUtil.assertFalse(false, "TestCrashWoodpecker!");
    }

    @OnClick(R.id.btn_test_leakcanary)
    public void testLeakCanary() {
        LoginActivity.launch(this);
        finish();
    }

    @OnClick(R.id.btn_test_stetho)
    public void testStetho() {
        BenifitActivity.launch(this);
    }
}
