package udemy.dataStructuresAndAlgorithms.adt;

/**
 * Created by LierreNarcissus on 10/22/16.
 */
public class CounterApp {

    public static void main(String... args){

        Counter myCounter = new Counter("MyCounter");

        myCounter.increment();
        myCounter.increment();
        myCounter.increment();
        myCounter.increment();

        System.out.print(myCounter);


    }

}
