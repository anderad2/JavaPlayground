package practice.main;

import java.util.Set;
import java.util.TreeSet;
import java.util.function.Function;
import java.util.function.Predicate;

/**
 * Created by LierreNarcissus on 11/12/16.
 */
public class FunctionalInterfaces implements Comparable<FunctionalInterfaces>{


    private String species;
    private boolean canHop;
    private boolean canSwim;

    public FunctionalInterfaces(String speciesName, boolean hopper, boolean swimmer){
        species = speciesName;
        canHop = hopper;
        canSwim = swimmer;
    }

    public boolean canHop(){
        return canHop;
    }

    public boolean canSwim(){
        return canSwim;
    }

    @Override
    public String toString(){
        return species;
    }

    public int compareTo(FunctionalInterfaces obj){
        return (this.species).compareTo(obj.species);
    }

    /********************************************************************************************************/


    public static void main(String... args){

        Predicate<FunctionalInterfaces> canSwim = a -> a.canSwim();
        Predicate<FunctionalInterfaces> canHop = FunctionalInterfaces::canHop;


        print(new FunctionalInterfaces("fish",false,true),canSwim);
        print(new FunctionalInterfaces("kangaroo",true,false),canHop);

        System.out.println();

        Set<FunctionalInterfaces> thisSet = new TreeSet<FunctionalInterfaces>();
        thisSet.add(new FunctionalInterfaces("kangaroo",true,false));
        thisSet.add(new FunctionalInterfaces("zebra",true,false));
        thisSet.add(new FunctionalInterfaces("fish",true,false));
        thisSet.add(new FunctionalInterfaces("monkey",true,false));
        thisSet.add(new FunctionalInterfaces("bird",true,false));
        thisSet.add(new FunctionalInterfaces("kangaroo",true,false));

        /*for(FunctionalInterfaces fi: thisSet){
            System.out.println(fi.species);
        }*/

        thisSet.forEach(System.out::println);




    }

    public static void print(FunctionalInterfaces obj, Predicate<FunctionalInterfaces> trait){
        if(trait.test(obj)){
            System.out.println(obj);
        }
    }
}
