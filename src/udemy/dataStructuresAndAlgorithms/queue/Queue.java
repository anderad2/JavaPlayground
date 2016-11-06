package udemy.dataStructuresAndAlgorithms.queue;

/**
 * Created by LierreNarcissus on 10/22/16.
 */
public class Queue {

    private int[] array;
    private int front;
    private int rear;
    private int size;
    private int items;

    public Queue(int size){
        this.size = size;
        this.array = new int[size];
        this.front = 0;
        this.rear = -1; //no items are in the array yet, so denotes it as empty
        this.items = 0;
    }

    public void insert(int data){
        //queue vals are always inserted at the rear

        if(!(isFull())) {
            rear++;
            array[rear] = data;
            items++;
        }else{
            System.out.println("This queue is on FULL! Data not added");
        }
    }

    public void view(){
        System.out.print("( ");
        for(int i = 0; i<array.length; i++){
            System.out.print(array[i]+ " ");
        }
        System.out.println(" )");
    }

    public int remove(){
        //Queue vals are removed from the front
        if(!isEmpty()) {
            int data = array[front];
            front++;
            items--;
            return data;
        }else{
            System.out.println("This queue is on EMPTY! No items removed");
            return -1;
        }

    }

    public int peek(){
        return array[front];
    }

    public boolean isFull(){
        return (items == size);
    }

    public boolean isEmpty(){
        return (items == 0); //or front==rear
    }



}
