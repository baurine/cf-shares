package cn.baurine.androidpractice.api;

import com.facebook.stetho.okhttp3.StethoInterceptor;

import okhttp3.OkHttpClient;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * Created by baurine on 3/18/16.
 */
public class ApiClient {

    private static ApiService apiService;

    public static ApiService getApiService() {
        if (apiService == null) {

            OkHttpClient client = new OkHttpClient.Builder()
                    .addNetworkInterceptor(new StethoInterceptor())
                    .build();

            Retrofit retrofit = new Retrofit.Builder()
                    .baseUrl("http://gank.avosapps.com/api/")
                    .addConverterFactory(GsonConverterFactory.create())
                    .client(client)
                    .build();
            apiService = retrofit.create(ApiService.class);
        }
        return apiService;
    }
}
