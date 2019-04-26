// written by Arthur Phan for CS48- Organized (All-Stars)

// GOLD schedule api possibility

// implementation notes
// frontend- dragout for destination names
// destination names allowed (checked on frontend)

// import destination.DestNode;
import java.util.*;


public class implementation{
    public static void main(String args[]){
        // Creating object of class linked list
        LinkedList<DestNode> DestList = new LinkedList<DestNode>();
        Scanner s = new Scanner(System.in);
        int c = 1;

/* DEBUG HELP NEEDED HERE:
When "done" is inputted to Scanner
string tempSrc should set c = 0
and not add a new node */

        while (c == 1 && DestList.size() != 10){ // list must not exceed 10, and check if they want more nodes
            System.out.println(c + "test");

            System.out.print("Enter a destination, or \"done\" if no more: ");
            String tempSrc = s.nextLine();
            System.out.println(tempSrc + "test");
            if (Objects.equals(tempSrc, new String("done"))){
                c = 0;
                System.out.println(c + "test");
            }
            if (c == 1){ // only add node if tempSrc != 1
                System.out.println(c + "test");
                System.out.print("Enter a transportation method: ");
                String tempMeth = s.nextLine();
                DestNode tempNode = new DestNode(tempSrc, tempMeth);
                DestList.add(tempNode);
            }
        }

        if (DestList.size() == 10){
            System.out.println("The list can only contain 10 destinations. ");
        }

        System.out.println("Your list is: ");

        for(int i = 0; i < DestList.size(); i++){
            DestNode tempN = DestList.get(i);
            System.out.println(" " + (i + 1) + ". " + tempN.getSource() + ", " + tempN.getMethod());
            // loop for printing list
        }
    }
}
