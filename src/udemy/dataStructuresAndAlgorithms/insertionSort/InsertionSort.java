package udemy.dataStructuresAndAlgorithms.insertionSort;

/**
 * Created by LierreNarcissus on 11/5/16.
 */
public class InsertionSort {


    public static void main(String... args) {

        int[] result = insertionSort(new int[]{4, 2, 6, 82, 55, 8, 2, 76});

        System.out.println("UnSorted Input => 4,2,6,82,55,8,2,76 ");
        System.out.print("Sorted Results per InsertionSort => ");
        for (int val : result) {
            System.out.print(" " + val);
        }

    }

    private static int[] insertionSort(int[] arrayInput){

        //notice that it starts at index 1
        for(int i=1; i<arrayInput.length; i++){

            int element = arrayInput[i]; //value coming to the sorted area
            int j = i-1; //always point to index position of the last value in the sorted area

            while(j >= 0 && arrayInput[j]>element){
                arrayInput[j+1] = arrayInput[j];
                j--;
            }

            arrayInput[j+1] = element;
        }
       return arrayInput;

    }




}
