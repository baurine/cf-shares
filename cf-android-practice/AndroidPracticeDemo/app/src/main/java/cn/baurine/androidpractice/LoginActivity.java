package cn.baurine.androidpractice;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.EditText;

import butterknife.Bind;
import butterknife.ButterKnife;
import butterknife.OnClick;

public class LoginActivity extends AppCompatActivity {

    @Bind(R.id.et_name)
    EditText etName;

    ////////////////////////////////////////////////////

    public static void launch(Context from) {
        Intent intent = new Intent(from, LoginActivity.class);
        from.startActivity(intent);
    }

    ////////////////////////////////////////////////////

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        ButterKnife.bind(this);

        AndroidPracticeApp.getAccountManager().regListener(
                new AccountManager.OnAccountListener() {
                    @Override
                    public void onAccountChanged(String userName) {
                        etName.setText(userName);
                    }
                }
        );
    }

    @OnClick(R.id.btn_go)
    public void onClick(View v) {
        AndroidPracticeApp.getAccountManager().setUserName(etName.getText().toString());
        MainActivity.launch(this);
        finish();
    }
}
