// written by Arthur Phan for CS48- Organized (All-Stars)
// class DestNode is a node, to be used for linked list

package destination;

public class DestNode{
    private String Source; // where the user inputs they are at instance x
    private String Method; // how the user wants to get to instance x + 1

    DestNode(String src, String meth){
        Source = src;
        Method = meth;
    }

    String getMethod(){
        return Source;
    }
    String getSource(){
        return Method;
    }
}
