// written by Arthur Phan for CS48- Organized (All-Stars)

// implementation notes
// frontend- dragout for destination names
// destination names allowed (checked on frontend)

// import destination.DestNode;
import java.util.*;
import java.io.*;

public class implementation{
    /* function for removing all invalid nodes */
    boolean doneFlag;
    boolean valFlag;
    public LinkedList<Destnode> validateList(LinkedList<DestNode> listcheck, boolean validFlag){
        for(int i = 0; i < listcheck.size(); i++){
            Destnode tempNode = listcheck.get(i);
            if(tempNode.getMethod() != "biking" || tempNode.getMethod() != "walking"){
                validFlag = false;
                listcheck.remove(i);
            }
        }
        return listcheck;
    }

    private LinkedList<Destnode> bikeParking(LinkedList<DestNode> listcheck){

    }


    public static void main(String args[]){
        /* boolean for whether to stop asking for input; true is done, false if not done */
        /* boolean for checking list validity; true if valid, false if invalid */
        doneFlag = false;
        valFlag = true;
        /* Creating object of class linked list */
        LinkedList<DestNode> DestList = new LinkedList<DestNode>();
        /* scanner object for reading user input */
        Scanner s = new Scanner(System.in);

        /* List must not exceed 10, and check if user wants more nodes */
        while(doneFlag == false){
            /* only add node if tempSrc != "" */
            if(doneFlag == false){
                System.out.print("Enter a transportation method: ");
                String tempMeth = s.nextLine();

                /* default method is walking */
                if(Objects.equals(tempMeth, new String(""))){
                    tempMeth = "walking";
                    System.out.println("      -defaulted to walking-");
                }
                /* create and add node */
                DestNode tempNode = new DestNode(tempSrc, tempMeth);
                DestList.add(tempNode);
            }
        }

        /* warning message for list length 10 */
        if(DestList.size() == 10) System.out.println("The list can only contain 10 destinations. ");

        /* validate the list before printing */
        /* only print for nonempty list */
        DestList = validateList(DestList, valFlag);

        if(DestList.size() != 0){
            if(valFlag == false){
                System.out.println("One or more destinations had invalid methods of transporation. ");
            }
            System.out.println("Your list is: ");
            for(int i = 0; i < DestList.size(); i++){
                DestNode tempN = DestList.get(i);
                System.out.println(" " + (i + 1) + ". " + tempN.getSource() + ", " + tempN.getMethod());
            }
        }
        /* message if no items were added */
        else{
            System.out.println("No locations were added to the list.");
        }

    }
}
