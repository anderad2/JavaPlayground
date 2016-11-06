package udemy.dataStructuresAndAlgorithms.linkedList;

/**
 * Created by LierreNarcissus on 10/22/16.
 */
public class LinkedListApp {

    public static void main(String... args){

        Node nodeA = new Node();
        nodeA.data = 4;

        Node nodeB = new Node();
        nodeB.data = 3;

        Node nodeC = new Node();
        nodeC.data = 7;

        Node nodeD = new Node();
        nodeD.data = 8;

        nodeA.next = nodeB;
        nodeB.next = nodeC;
        nodeC.next = nodeD;

        getLength(nodeA);

        getLength(nodeB);

        getLength(nodeC);

    }

    public static void getLength(Node node){
        int count = 1;
        Node current = node;

        while(current.next!=null){
            //System.out.println(current.data);
            count++;
            current = current.next;
        }

        System.out.println("Count: "+count);

        //return count;
    }

}
