package udemy.dataStructuresAndAlgorithms.queue;

/**
 * Created by LierreNarcissus on 10/22/16.
 */
public class QueueApp {

    public static void main(String... args){

        Queue myQueue = new Queue(5);
        myQueue.insert(100);
        myQueue.insert(1000);
        myQueue.insert(14);
        myQueue.insert(12);
        myQueue.insert(44);
        myQueue.view();


        myQueue.insert(34);
        myQueue.remove();
        myQueue.remove();
        myQueue.remove();
        myQueue.remove();
        myQueue.remove();
        myQueue.remove();


    }

}
