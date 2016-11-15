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

        int[] temp = new int[endingIndex - startingIndex + 1];
        int leftSlot = startingIndex;
        int rightSlot = midPoint + 1;
        int k = 0;

        while(leftSlot <= midPoint && rightSlot <= endingIndex){

            if(arrayInput[leftSlot]<arrayInput[rightSlot]){
                temp[k] = arrayInput[leftSlot];
                leftSlot++;
            }else{
                temp[k] = arrayInput[rightSlot];
                rightSlot++;
            }

            k++;
        }

        if(leftSlot <= midPoint){
            while(leftSlot <= midPoint){
                temp[k] = arrayInput[leftSlot];
                leftSlot++;
                k++;
            }
        }else if(rightSlot <= endingIndex) {
            while (rightSlot <= endingIndex) {
                temp[k] = arrayInput[rightSlot];
                rightSlot++;
                k++;
            }
        }

        //copy temp to arrayInput
        for(int i=0; i< temp.length; i++){
            arrayInput[startingIndex + i] = temp[i];
        }


        return arrayInput;



    }
    
    //// TODO: 11/14/16 Try Merge inPLace with a single array; no temp

}
