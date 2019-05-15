import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;



import static spark.Spark.*;

public class servertest {
    public static void main(String[] args) {
        port(9000);
        get("/hello",(req,res) -> ("Hello World"));
        get("/json",(req,res) -> {

                        URL url = new URL("https://raw.githubusercontent.com/dkang1617/myjsontest/master/db.json");
                        HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                        conn.setRequestMethod("GET");
                        conn.setRequestProperty("Accept", "application/json");

                        if (conn.getResponseCode() != 200) {
                            throw new RuntimeException("Failed : HTTP error code : "
                                    + conn.getResponseCode());
                        }

                        BufferedReader br = new BufferedReader(new InputStreamReader(
                                (conn.getInputStream())));
                        String output = "";
                        while(br.readLine() != null) {
                           output += br.readLine();
                       }
                        conn.disconnect();

                        return output;



        });

            }


        }
