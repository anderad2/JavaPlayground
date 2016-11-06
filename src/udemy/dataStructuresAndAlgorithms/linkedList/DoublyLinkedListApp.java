package udemy.dataStructuresAndAlgorithms.linkedList;

/**
 * Created by LierreNarcissus on 10/22/16.
 */
public class DoublyLinkedListApp {

    public static void main(String... args){

        DoublyLinkedList myList = new DoublyLinkedList();

        myList.insertFirst(89);
        myList.insertFirst(7);
        myList.insertFirst(56);
        myList.insertFirst(44);
        myList.insertFirst(3);
        myList.insertFirst(1);
        myList.insertLast(7888);
        myList.insertLast(897);
        myList.displayForward();

        myList.deleteFirst();
        myList.deleteLast();
        myList.deleteKey(7888);
        myList.displayBackward();


    }

}
