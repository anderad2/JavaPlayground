package udemy.dataStructuresAndAlgorithms.mergeSort;

/**
 * Created by LierreNarcissus on 11/5/16.
 */
public class MergeSort {

    public static void main(String... args){

        int[] input = new int[]{4, 2, 6, 82, 55, 8, 2, 76};

        int[] result = mergeSort(input,0,input.length-1);

        System.out.println("UnSorted Input => 4, 2, 6, 82, 55, 8, 2, 76 ");
        System.out.print("Sorted Results per InsertionSort => ");
        for (int val : result) {
            System.out.print(" " + val);
        }

    }

    private static int[] mergeSort(int[] arrayInput, int startingIndex, int endingIndex){

         if(startingIndex < endingIndex){

            int midPoint = (startingIndex + endingIndex) / 2;

            mergeSort(arrayInput, startingIndex, midPoint);
            mergeSort(arrayInput, midPoint+1, endingIndex);
            merge(arrayInput, startingIndex, midPoint, endingIndex);

        }


        return arrayInput;
    }

    private static int[] merge(int[] arrayInput, int startingIndex, int midPoint, int endingIndex){

        int[] leftArray = new int[ midPoint - startingIndex+1 ];
        int[] rightArray = new int[ endingIndex - midPoint ];

        for(int i = startingIndex; i < midPoint; i++){
            leftArray[i] = arrayInput[i];
        }

        for(int i = 0,j=midPoint+1; j<endingIndex && i<rightArray.length; i++, j++){
            rightArray[i] = arrayInput[j];
        }


        return arrayInput;



    }

}
