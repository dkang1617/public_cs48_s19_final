/* written by Arthur Phan for CS48- Organized (All-Stars)
class DestNode is a node, to be used for linked list */


public class DestNode{

    /* DestNode constructor */
    public DestNode(String src, String meth){
        Source = src;
        Method = meth;
    }
    /* getSource() returns Source */
    public String getSource(){
        return Source;
    }
    /* getMethod() return Method */
    public String getMethod(){
        return Method;
    }
    /* attributes for DestNode are Source and Method
    Source; where the user inputs they are at instance x
    Method; how the user wants to get to instance x + 1 */
    
    private String Source;
    private String Method;
}
