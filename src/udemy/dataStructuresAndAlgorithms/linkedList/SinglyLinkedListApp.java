package udemy.dataStructuresAndAlgorithms.linkedList;

/**
 * Created by LierreNarcissus on 10/22/16.
 */
public class SinglyLinkedListApp {

    public static void main(String... args){

        SinglyLinkedList myList = new SinglyLinkedList();

        myList.insertFirst(100);
        myList.insertFirst(50);
        myList.insertFirst(56);
        myList.insertFirst(34);
        myList.insertFirst(23);
        myList.insertFirst(9);

        myList.deleteFirst();

        myList.displayList();

        myList.insertLast(5000);

        myList.displayList();


    }

}
