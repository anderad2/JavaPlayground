package udemy.dataStructuresAndAlgorithms.linkedList;

/**
 * Created by LierreNarcissus on 10/22/16.
 */
public class SinglyLinkedList {

    private Node first;


    public boolean isEmpty(){
        return (first==null);
    }


    public void insertFirst(int data){ //insert at the beginning
        Node newNode = new Node();
        newNode.data = data;
        newNode.next = first;
        first = newNode;
    }

    public void insertLast(int data){ //insert at the beginning
        Node current = first;

        while(current.next!=null){
            current = current.next;
        }

        Node newNode = new Node();
        newNode.data = data;

        current.next = newNode;

    }


    public Node deleteFirst(){
        Node temp = first;
        first = first.next;
        return temp;
    }

    public void displayList(){
        Node current = first;

        System.out.println("List (first --> last) ");
        while(current!=null){
            current.displayNode();
            current = current.next;
        }

    }


}
