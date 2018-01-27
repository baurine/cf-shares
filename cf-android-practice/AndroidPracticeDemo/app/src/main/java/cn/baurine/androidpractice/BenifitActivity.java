package cn.baurine.androidpractice;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.widget.ImageView;

import com.squareup.picasso.Picasso;

import butterknife.Bind;
import butterknife.ButterKnife;
import butterknife.OnClick;
import cn.baurine.androidpractice.api.ApiClient;
import cn.baurine.androidpractice.model.GankData;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class BenifitActivity extends AppCompatActivity {

    @Bind(R.id.iv_benifit)
    ImageView ivBenifit;

    int day = 17;

    ///////////////////////////////////////////

    public static void launch(Context from) {
        Intent intent = new Intent(from, BenifitActivity.class);
        from.startActivity(intent);
    }

    ///////////////////////////////////////////

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_benifit);

        ButterKnife.bind(this);

        showBenifit();
    }

    ///////////////////////////////////////////

    @OnClick(R.id.btn_benifit)
    public void showBenifit() {
        Call<GankData> call = ApiClient.getApiService().getGankData(2016, 3, day);
        call.enqueue(new Callback<GankData>() {
            @Override
            public void onResponse(Call<GankData> call, Response<GankData> response) {
                if (response.isSuccessful()) {
                    GankData gankData = response.body();
                    if (gankData != null) {
                        Picasso.with(BenifitActivity.this)
                                .load(gankData.results.福利.get(0).url)
                                .into(ivBenifit);
                        day--;
                    }
                }
            }

            @Override
            public void onFailure(Call<GankData> call, Throwable t) {
                DebugUtil.assertFalse(true);
            }
        });
    }
}
