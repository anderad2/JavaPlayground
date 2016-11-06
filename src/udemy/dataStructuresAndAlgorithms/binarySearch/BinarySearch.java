package udemy.dataStructuresAndAlgorithms.binarySearch;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Created by LierreNarcissus on 11/2/16.
 */
public class BinarySearch {


    public static void main(String... args){

        int[] arrayInput = {34,54,6,75,21,1,5,7,8,9,5,35,67};
        Arrays.sort(arrayInput);

        int data = -588;

        long start = System.nanoTime();
        System.out.println("BinarySearch => Data "+data+" found at index "+ binarySearch(arrayInput,data));
        long end = System.nanoTime();
        long result = end - start;

        long recursiveStart = System.nanoTime();
        System.out.println("RecursiveBinarySearch => Data "+data+" found at index "+ recursiveBinarySearch(arrayInput,data,0,arrayInput.length-1));
        long recursiveEnd = System.nanoTime();
        long recursiveResult = recursiveEnd - recursiveStart;

        System.out.println("Performance => BinarySearch: "+result+" RecursiveBinarySearch: "+recursiveResult);

    }

    private static int binarySearch(int[] arrayInput, int data){

        int beginningIndex = 0;
        int endingIndex = arrayInput.length-1;

        while(beginningIndex < endingIndex){

            int midPoint = (beginningIndex + endingIndex)/2;

            if(arrayInput[midPoint] == data){
                return midPoint;

            }else if(arrayInput[midPoint] > data){
                endingIndex = midPoint - 1;

            }else{
                beginningIndex = midPoint + 1;

            }

        }

        return -(beginningIndex + 1);


    }


    private static int recursiveBinarySearch(int[] arrayInput, int data, int beginningIndex, int endingIndex){

        if(beginningIndex < endingIndex){

            int midPoint = (beginningIndex + endingIndex)/2;

            if(arrayInput[midPoint] == data){
                return midPoint;

            }else if(arrayInput[beginningIndex] > data){
                return -(beginningIndex + 1);
            }

            else if(arrayInput[midPoint] > data){
                return recursiveBinarySearch(arrayInput,data,beginningIndex,midPoint);

            }else{
                return recursiveBinarySearch(arrayInput,data,midPoint+1,endingIndex);

            }

        }


        return -(beginningIndex + 1);
    }








}
