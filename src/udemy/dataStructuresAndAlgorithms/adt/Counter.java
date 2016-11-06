package udemy.dataStructuresAndAlgorithms.adt;

/**
 * Created by LierreNarcissus on 10/22/16.
 */
public class Counter {

    private int count;
    private String name;

    public Counter(String str){
        this.name = str;
    }

    public void increment(){
        count++;
    }

    public int getCurrentValue(){
        return count;
    }

    public String toString(){
        //System.out.println("The count is HOT at "+count);
        return "The counter "+name+" is HOT at "+count;
    }



}
