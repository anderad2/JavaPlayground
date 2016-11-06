package udemy.dataStructuresAndAlgorithms.fiveStacks;

/**
 * Created by LierreNarcissus on 10/23/16.
 */
public class NStacksApp {

    public static void main(String... args){

        NStacks nstacks = new NStacks(10,20);

        while(!nstacks.allStacksFull()){
            nstacks.insert((int)(Math.random()*100));
        }

        System.out.println("All space reserved");

        nstacks.displayNStacks();

    }

}
