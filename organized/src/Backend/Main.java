import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import org.apache.commons.io.*;
import java.nio.charset.Charset;
import org.json.*;

import java.net.URL;

import static spark.Spark.*;

public class servertest {
    public static void main(String[] args) {
        port(9000);
        corsfilter cor = new corsfilter();
        cor.apply();
        get("/hello",(req,res) -> ("Hello World"));
        get("/json",(req,res) -> {

            JSONObject json = new JSONObject(IOUtils.toString(new URL("https://raw.githubusercontent.com/dkang1617/myjsontest/master/db.json"), Charset.forName("UTF-8")));


//                        URL url = new URL("https://my-json-server.typicode.com/dkang1617/myjsontest");
//                        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
//                        conn.setRequestMethod("GET");
//                        conn.setRequestProperty("Accept", "application/json");
//
//                        if (conn.getResponseCode() != 200) {
//                            throw new RuntimeException("Failed : HTTP error code : "
//                                    + conn.getResponseCode());
//                        }
//
//                        BufferedReader br = new BufferedReader(new InputStreamReader(
//                                (conn.getInputStream())));
//                        String output = "";
//                        while(br.readLine() != null) {
//                           output += br.readLine();
//                        }
//
//                        Gson gson = new Gson();
//                        String final_output = gson.toJson(output);
//                        conn.disconnect();
//                        return gson;

            return json;
            

        });

            }


        }
