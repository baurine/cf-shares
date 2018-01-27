package cn.baurine.androidpractice.api;

import cn.baurine.androidpractice.model.GankData;
import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;

/**
 * Created by baurine on 3/18/16.
 */
public interface ApiService {
    @GET("day/{year}/{month}/{day}")
    Call<GankData> getGankData(@Path("year") int year,
                               @Path("month") int month, @Path("day") int day);
}
