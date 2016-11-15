package udemy.dataStructuresAndAlgorithms.quickSort;

/**
 * Created by LierreNarcissus on 11/15/16.
 */
public class QuickSort {


    public static void main(String... args){

        int[] input = new int[]{4, 2, 6, 82, 55, 8, 2, 76};

        int[] result = quickSort(input,0,input.length-1);

        System.out.println("UnSorted Input => 4, 2, 6, 82, 55, 8, 2, 76 ");
        System.out.print("Sorted Results per InsertionSort => ");
        for (int val : result) {
            System.out.print(" " + val);
        }

    }

    private static int[] quickSort(int[] arrayInput, int startingIndex, int endingIndex){

        if(startingIndex < endingIndex){
            int pivot = partition(arrayInput, startingIndex, endingIndex);

            quickSort(arrayInput, startingIndex, pivot-1); //left side
            quickSort(arrayInput, pivot+1, endingIndex); //right side
        }

        return arrayInput;

    }

    private static int partition(int[] arrayInput, int startingIndex, int endingIndex){

        int pivot = arrayInput[endingIndex];

        int i = startingIndex - 1;
        int j=0;

        while(j < endingIndex-1){

            if(arrayInput[j] <= pivot){
                i++;
                int tmp = arrayInput[i];
                arrayInput[i] = arrayInput[j];
                arrayInput[j] = tmp;
            }
            j++;

        }

        int tmp = arrayInput[i+1];
        arrayInput[i+1] = arrayInput[endingIndex];
        arrayInput[endingIndex] = tmp;

        return i++;


    }

}
