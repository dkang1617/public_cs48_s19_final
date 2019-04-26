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

        while (s.next() != "1" && DestList.size() != 10){
            System.out.print("Enter a destination, or \"1\" if no more: ");
            String tempSrc = s.next();
            System.out.print("Enter a transportation method: ");
            String tempMeth = s.next();
            DestNode tempNode = new DestNode(tempSrc, tempMeth);
            DestList.add(tempNode);
        }
        if (DestList.size() == 10){
            System.out.print("The list can only contain 10 destinations. \n Your list is: ")
        }


        for(int i = 0; i < DestList.size(); i++){
            DestNode tempN = DestList.get(i);
            System.out.println(tempN.getSource() + ", " + tempN.getMethod());
            // loop for actually printing
        }
    }
}
