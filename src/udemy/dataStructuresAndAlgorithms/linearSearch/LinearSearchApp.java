package udemy.dataStructuresAndAlgorithms.linearSearch;

/**
 * Created by LierreNarcissus on 10/22/16.
 */
public class LinearSearchApp {

    public static void main(String... args){

        int[] array = {23,4,5,6,7};
        int key = -4324;

        long start = System.nanoTime();
        System.out.println("Linear Search "+key+" found at index "+linearSearch(array,key));
        long end = System.nanoTime();
        long result = end - start;

        long recursiveStart = System.nanoTime();
        System.out.println("RecursiveLinearSearch "+key+" found at index "+recursiveLinearSearch(array,key,0));
        long recursiveEnd = System.nanoTime();
        long recursiveResult = recursiveEnd - recursiveStart;

        System.out.println("Performance => LinearSearch: "+result+" RecursiveLinearSearch: "+recursiveResult);


    }

    public static int linearSearch(int[] a,int key){


        for(int i = 0; i < a.length; i++){
            if(a[i] == key){
                return i;
            }
        }

        return -1;

    }


    public static int recursiveLinearSearch(int[] arrayInput, int data, int index){

        if(index >= arrayInput.length){
            return -1;

        }else if (arrayInput[index] == data) {
            return index;

        } else {

            return recursiveLinearSearch(arrayInput, data, ++index);
        }




    }

}
