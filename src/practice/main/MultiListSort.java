package practice.main;

import java.util.*;

/**
 * Created by LierreNarcissus on 11/18/16.
 */
public class MultiListSort {





    public static void main(String... args){


        List<ArrayList<Integer>> list = new ArrayList<>();

        list.add(new ArrayList<Integer>(Arrays.asList(4,5,6)));
        list.add(new ArrayList<Integer>(Arrays.asList(1,2,3)));
        list.add(new ArrayList<Integer>(Arrays.asList(15,16,17)));
        list.add(new ArrayList<Integer>(Arrays.asList(10,11,12)));

        System.out.println("Output: "+ sort(list));

    }

    //Assumption is that the inner array lists are sorted
    private static List<Integer> sort(List<ArrayList<Integer>> input){

        List<Integer> output = new ArrayList<>();
        Map<Integer,Integer> map = new TreeMap<>();

        //place the minimum value from each list into the map
        for(ArrayList<Integer> list:input){
            map.put(list.get(0),list.get(0));
        }

        for(Integer val: map.values()){

            for(ArrayList<Integer> list:input){
                if(list.get(0).equals(val)){
                    output.addAll(list);
                }
            }

        }

        return output;

    }

}
