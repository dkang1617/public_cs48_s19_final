

public static void main(String args[]){
        /* function to make new linkedlist is called */
        LinkedList<DestNode> userList = this.makeNewList();

        /* validate the list before printing */
        userList = this.validateList(userList, valFlag);

        /* print the list */
        this.printList(userList, valFlag);

    }
