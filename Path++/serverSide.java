// written by Arthur Phan for CS48- Organized (All-Stars)

// implementation notes
// frontend- dragout for destination names
// destination names allowed (checked on frontend)

// import destination.DestNode;
import java.util.*;
import java.io.*;

public class serverSide{
    public static void main(String args[]){
        /* boolean for whether to stop asking for input; true is done, false if not done */
        /* boolean for checking list validity; true if valid, false if invalid */
        boolean doneFlag;
        boolean valFlag = true;

        /* function to make new linkedlist is called */

        implementation commLine = new implementation();
        LinkedList<DestNode> userList = commLine.makeNewList();

        /* validate the list before printing */
        userList = commLine.validateList(userList, valFlag);

        /* print the list */
        commLine.printList(userList, valFlag);
    }
}
