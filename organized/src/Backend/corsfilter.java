import java.util.HashMap;
import spark.Filter;
import spark.Request;
import spark.Response;
import spark.Spark;

/**
 * Really simple helper for enabling CORS in a spark application;
 */
public class corsfilter /*implements Apply*/{

    private final HashMap<String, String> corsHeaders = new HashMap<>();

    public corsfilter() {
        corsHeaders.put("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        corsHeaders.put("Access-Control-Allow-Origin", "*");
        corsHeaders.put("Access-Control-Allow-Headers", "Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin,");
        corsHeaders.put("Access-Control-Allow-Credentials", "true");
    }


    public void apply() {
        Filter filter = new Filter() {

            public void handle(Request request, Response response) throws Exception {
                corsHeaders.forEach((key, value) -> {
                    response.header(key, value);
                });
            }
        };
        Spark.after(filter);
    }
}
