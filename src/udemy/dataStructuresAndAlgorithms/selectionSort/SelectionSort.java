package udemy.dataStructuresAndAlgorithms.selectionSort;

/**
 * Created by LierreNarcissus on 11/5/16.
 */
public class SelectionSort {

    public static void main(String... args){


        int[] result = selectionSort(new int[]{ 4,2,6,82,55,8,2,76 });

        System.out.println("UnSorted Input => 4,2,6,82,55,8,2,76 ");
        System.out.print("Sorted Results => ");
        for(int val:result){
            System.out.print(" "+val);
        }

    }


    private static int[] selectionSort(int[] arrayInput){


        for(int i= 0; i<arrayInput.length; i++){

            int min = i;

            for(int j = i+1; j<arrayInput.length; j++){

                if(arrayInput[j] < arrayInput[min]) {
                    min = j;
                }

            }

            int temp = arrayInput[i];
            arrayInput[i] = arrayInput[min];
            arrayInput[min] = temp;
        }

        return arrayInput;

    }

}
