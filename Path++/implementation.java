// written by Arthur Phan for CS48- Organized (All-Stars)

// implementation notes
// frontend- dragout for destination names
// destination names allowed (checked on frontend)

// import destination.DestNode;
import java.util.*;
import java.io.*;

public class implementation{
    /* boolean for whether to stop asking for input; true is done, false if not done */
    /* boolean for checking list validity; true if valid, false if invalid */
    boolean doneFlag;
    boolean valFlag = true;

    /* this function is automatically called at the beginning of main call- returns a LinkedList */
    public LinkedList<DestNode> makeNewList(){
        doneFlag = false;
        /* Creating object of class linked list */
        LinkedList<DestNode> DestList = new LinkedList<DestNode>();
        /* scanner object sysIn is for reading user input */
        Scanner sysIn = new Scanner(System.in);
        /*initialize strings for making nodes */
        String tempSrc = "";
        String tempMeth = "";

        /* check for two conditions before actually adding to list - check if it is a new list, or if the list is full */
        while(doneFlag == false){
            /* message for first destination of list */
            if(DestList.size() == 0){
                System.out.print("Enter the first destination to start your list: ");
                tempSrc = sysIn.nextLine();

                /* if nothing is entered for the first destination, print error */
                if(Objects.equals(tempSrc, new String(""))){
                    System.out.println(" Please restart the program if you wish to create a list. ");
                    doneFlag = true;
                }
            }

            /* warning message for list length 10 */
            if(DestList.size() == 10){
                System.out.println("The list can only contain 10 destinations.");
                doneFlag = true;
            }

            /* message for the rest of the destinations of the list */
            if(doneFlag == false && DestList.size() != 0){
                int currentLen = DestList.size();
                System.out.print("Enter the next destination. It will be Destination #" + currentLen + ":\n");
                tempSrc = sysIn.nextLine();
            }

            /* only add node if tempSrc != "" */
            if(doneFlag == false){
                System.out.print("Enter whether you are 'biking' or 'walking' to the next destination.\n  The default is walking: ");
                tempMeth = sysIn.nextLine();

                /* default method is walking */
                if(Objects.equals(tempMeth, new String(""))){
                    tempMeth = "walking";
                    System.out.println(" --defaulted to walking-- ");
                }

                /* create and add node */
                DestNode tempNode = new DestNode(tempSrc, tempMeth);
                DestList.add(tempNode);
            }
        }

        return DestList;
    }


    /* NOT IMPLEMENTED YET: if the user is biking places, they should be directed to the coordinates of bike parking */
    // private LinkedList<DestNode> bikeParking(LinkedList<DestNode> listcheck){
    //
    // }


    /* function for removing all invalid nodes - args are a DestNode linked list and the valFlag */
    public LinkedList<DestNode> validateList(LinkedList<DestNode> listToCheck, boolean validFlag){
        /* autoreturn an empty list */
        if(listToCheck.size() == 0){
            return listToCheck;
        }

        /* iterate through the list and remove any elements with invalid methods of transporation */
        for(int i = 0; i < listToCheck.size(); i++){
            DestNode tempNode = listToCheck.get(i);
            if((tempNode.getMethod()).toLowerCase() != "biking" || (tempNode.getMethod()).toLowerCase() != "walking"){
                validFlag = false;
                listToCheck.remove(i);
            }
        }
        return listToCheck;
    }


    /* function for print statement */
    public void printList(LinkedList<DestNode> listToPrint, boolean validFlag){
        if(listToPrint.size() != 0){
            if(validFlag == false){
                System.out.println("One or more destinations had invalid methods of transporation. ");
            }
            System.out.println("Your list is: ");
            for(int i = 0; i < listToPrint.size(); i++){
                DestNode tempNode = listToPrint.get(i);
                System.out.println(" " + (i + 1) + ". " + tempNode.getSource() + ", " + tempNode.getMethod());
            }
        }
    }

    public static void main(String args[]){
    }
}
