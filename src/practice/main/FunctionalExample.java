package practice.main;

import java.util.*;
import java.util.function.*;

import static java.lang.System.*;

/**
 * Created by LierreNarcissus on 9/30/16.
 */
public class FunctionalExample {


    public static int addIt(int x){
        return x;
    }

    public static boolean isGreaterThanThree(int x){
        return x>3;
    }

    public static boolean isEven(int x){
        return x%2==0;
    }

    public static void main(String... args){

        List<Integer> numbers = Arrays.asList(1,4,2,5,3,9,7);
        Collections.sort(numbers);

        int val = 3;

        System.out.println(
        numbers.stream()
                //.reduce(0,Integer::sum);
                .filter(e->e>0)
                .mapToInt(e -> e*2)
                //.forEach(e->Integer::)
                .sum()
        );
                //.forEach(System.out::println);



        /*System.out.println(
            numbers.parallelStream()
                    //.filter(FunctionalExample::isGreaterThanThree)
                    //.filter( x -> x>3 && 7-x<7)
                    //.forEach(val,x -> val+x)
                    //.map( FunctionalExample::isEven)
                    .mapToInt(FunctionalExample::addIt)
                    .sum()
                    //.findFirst()
                    //.get()
        );*/

    }

}
