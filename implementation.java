// written by Arthur Phan for CS48- Organized (All-Stars)

// implementation notes
// frontend- dragout for destination names
// destination names allowed (checked on frontend)

// import destination.DestNode;
import java.util.*;


public class implementation{
    public static void main(String args[]){
        /* Creating object of class linked list */
        LinkedList<DestNode> DestList = new LinkedList<DestNode>();
        Scanner s = new Scanner(System.in);

        /* Boolean int for whether to stop asking for input */
        int notDone = 1;

        /* List must not exceed 10, and check if user wants more nodes */
        while(notDone == 1 && DestList.size() != 10){
            System.out.print("Enter a destination, or input nothing if no more destinations are wanted: ");
            String tempSrc = s.nextLine();

            /* checks in user inputted "" to stop adding nodes */
            notDone = !(Objects.equals(tempSrc, new String("")));

            /* only add node if tempSrc != "" */
            if(notDone == 1){
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
        if(DestList.size() == 10)
            System.out.println("The list can only contain 10 destinations. ");

        /* only print for nonempty list */
        if(DestList.size() != 0){
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
