package udemy.dataStructuresAndAlgorithms.linkedList;

/**
 * Created by LierreNarcissus on 10/22/16.
 */
public class DoublyLinkedList {

    private Node first;
    private Node last;


    public boolean isEmpty(){
        return (first==null);
    }


    public void insertFirst(int data){ //insert at the beginning
        Node newNode = new Node();
        newNode.data = data;

        if(isEmpty()){
            last = newNode;
        }else{
            first.previous = newNode;
        }

        newNode.next = first;
        first = newNode;
    }

    public void insertLast(int data){ //insert at the beginning
        Node newNode = new Node();
        newNode.data = data;

        if(isEmpty()){
            first = newNode;
        }else{
            last.next = newNode;
            newNode.previous = last;
        }

        last = newNode;

    }

    public Node deleteFirst(){
        Node temp = first;

        if(first.next==null){
            last = null;
        }else{
            first.next.previous = null;
        }

        first = first.next;
        return temp;
    }

    public Node deleteLast(){
        Node temp = last;

        if(first.next==null){
            first = null;
        }else{
            last.previous.next = null;
        }
        last = last.previous;

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

    public boolean insertAfter(int key, int data){
        Node newNode = new Node();
        newNode.data = data;

        Node current = first;
        while(current.data!=key){
            current = current.next;
            if(current==null){//end of list; key not found
                return false;
            }
        }

        if(current==last) {
            current.next = null;
            last = newNode;
        }else{
            newNode.next = current.next;
            newNode.next.previous = newNode;
        }

        newNode.previous = current;
        current.next = newNode;
        return true;

    }

    public Node deleteKey(int key){
        Node current = first;
        while(current.data!=key){
            current = current.next;
            if(current==null){//end of list; key not found
                return null;
            }
        }

        if(current == first){
            first = current.next;
        }else{
            current.previous.next = current.next;
        }

        if(current == last){
            last = current.previous;
        }else{
            current.next.previous = current.previous;
        }

        return current;
    }

    public void displayForward(){
        Node current = first;
        while (current != null){
            current.displayNode();
            current = current.next;
        }
        System.out.println();
    }

    public void displayBackward(){
        Node current = last;

        while(current != null){
            current.displayNode();
            current = current.previous;
        }
        System.out.println();
    }

}
