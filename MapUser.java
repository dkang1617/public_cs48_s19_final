/* written by Arthur Phan for CS48- Organized (All-Stars)
class MapUser is a user class, which can hold linkedlists composed of DestNode nodes */

public class MapUser{

    /* MapUser constructor */
    public MapUser(String name, String pass){
        Username = name;
        Password = pass;
    }
    /* getUsername() returns Username */
    public String getUsername(){
        return Username;
    }
    /* getMethod() returns Password */
    public String getPassword(){
        return Password;
    }
    /* verifyLogin() returns boolean value if */
    public Boolean verifyLogin(String name, String pass){
        if (name == getUsername() && pass == getPassword()) return true;
        else return false;
    }
    /* attributes for MapUser are Username, Password, and logStatus
    Username;
    Password;
    logStatus; true if the user is logged in, false otherwise
    listIDs; the user's array of DestLists; can only hold 7 */

    private String Username;
    private String Password;
    private boolean logStatus;
    private String[] listIDs = new String[7];
}
