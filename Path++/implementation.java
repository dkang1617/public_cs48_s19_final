// written by Arthur Phan for CS48- Organized (All-Stars)

// implementation notes
// frontend- dragout for destination names
// destination names allowed (checked on frontend)

// import destination.DestNode;
import java.util.*;
import java.io.*;

public class implementation{
    public static void createAccount(String username, String password){

    }

    public static void main(String args[]){
        // /* Creating object of class linked list */
        // LinkedList<DestNode> DestList = new LinkedList<DestNode>();
        /* scanner object for reading user input */
        Scanner s = new Scanner(System.in);
        /* boolean for whether to stop asking for input */
        boolean Done = false;
        /* boolean for whether or not this is a new account's data being stored */
        boolean NewAcc = true;
        /* file read and write, can change for System.in or String args*/
        String accountDataStr = "D:\\Coding Projects\\Java\\CS48\\cs48ProjectOrganized\\Path++\\accountData.txt";
        // String listDatabaseStr = "D:\\Coding Projects\\Java\\CS48\\cs48ProjectOrganized\\Path++\\listDatabase.txt";
        // String mapHelpStr = "D:\\Coding Projects\\Java\\CS48\\cs48ProjectOrganized\\Path++\\mapHelper.txt";

        FileReader accountData = new FileReader(accountDataStr);
        // FileReader listDatabase = new FileReader(listDatabaseStr);
        // FileReader mapHelp = new FileReader(mapHelpStr);
        // /* account data format is <user>++<password>\n
        // list data format is <listname>:<location>++<method> */
        Scanner inAccountData = new Scanner(accountData);
        // Scanner inAccountData = new Scanner(accountData).useDelimiter("\\s*++\\s*");
        // Scanner inListDatabase = new Scanner(listDatabase);
        // Scanner inMapHelp = new Scanner(mapHelp);
        PrintWriter outAccountData = new PrinterWriter(accountData);

        /* List must not exceed 10, and check if user wants more nodes */
        while(Done == false){
            System.out.print("Please enter your username: ");
            String tempUser = s.nextLine();

            /* checks if username is in accountData.txt; if is in txt file, then NewAcc stays false; otherwise, turns true */
            while(Object.equals(NewAcc, true) && inAccountData.hasnext()){
                String line = inAccountData.nextline();
                if(Objects.equals(line, tempSrc)){
                    NewAcc = false;
                }
                else{
                    outAccountData.println(tempUser);
                }
            }
            // /* add <user>++<pass> to accountData.txt if not found above */
            // if(Object.equals(NewAcc, true)){
            //     System.out.print("Please enter a password for this new account: ");
            //     String tempPass = s.nextLine();
            //     outAccountData.println(tempUser + "++" + tempPass);
            //     NewAcc = false;
            // }

            /* only add node if tempSrc != "" */
            if(Done == false){
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

// public class implementation{
//     public static void main(String args[]){
//         /* Creating object of class linked list */
//         LinkedList<DestNode> DestList = new LinkedList<DestNode>();
//         Scanner s = new Scanner(System.in);
//
//         /* boolean for whether to stop asking for input */
//         boolean Done = false;
//
//         /* List must not exceed 10, and check if user wants more nodes */
//         while(Done == false && DestList.size() != 10){
//             System.out.print("Enter a destination, or input nothing if no more destinations are wanted: ");
//             String tempSrc = s.nextLine();
//
//             /* checks in user inputted "" to stop adding nodes */
//             Done = (Objects.equals(tempSrc, new String("")));
//
//             /* only add node if tempSrc != "" */
//             if(Done == false){
//                 System.out.print("Enter a transportation method: ");
//                 String tempMeth = s.nextLine();
//
//                 /* default method is walking */
//                 if(Objects.equals(tempMeth, new String(""))){
//                     tempMeth = "walking";
//                     System.out.println("      -defaulted to walking-");
//                 }
//                 /* create and add node */
//                 DestNode tempNode = new DestNode(tempSrc, tempMeth);
//                 DestList.add(tempNode);
//             }
//         }
//
//         /* warning message for list length 10 */
//         if(DestList.size() == 10)
//             System.out.println("The list can only contain 10 destinations. ");
//
//         /* only print for nonempty list */
//         if(DestList.size() != 0){
//             System.out.println("Your list is: ");
//             for(int i = 0; i < DestList.size(); i++){
//                 DestNode tempN = DestList.get(i);
//                 System.out.println(" " + (i + 1) + ". " + tempN.getSource() + ", " + tempN.getMethod());
//             }
//         }
//         /* message if no items were added */
//         else{
//             System.out.println("No locations were added to the list.");
//         }
//
//     }
// }
