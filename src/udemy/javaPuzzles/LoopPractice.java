package udemy.javaPuzzles;

/**
 * Created by LierreNarcissus on 11/12/16.
 */
public class LoopPractice {

    public static void main(String... args){


        StringBuilder sb = new StringBuilder(
            "We have a large number of things in our warehouse falling in the " +
                        "category:apparel and the slightly more in demand category:makeup " +
                        " along with the category:furniture ..."
          );

        printCategories(sb.toString());

        reverseString(sb.toString());

        printEvenNumbersOnly(100);

    }

    //print onlt the categories:text
    private static void printCategories(String input){

        while(input.indexOf("category:")>-1){

            String tmp = input.substring(input.indexOf("category:"));
            tmp = tmp.substring(0,tmp.indexOf(" "));

            if(!tmp.substring(tmp.indexOf(":")+1).isEmpty()){
                System.out.println(tmp.substring(tmp.indexOf(":")+1));}

            input = input.replace(tmp,"");

        }
    }

    //given a String, prnit it in reverse
    private static void reverseString(String input){

        for(int i = input.length()-1; i >= 0; i--){
            System.out.print(input.charAt(i));
        }

    }

    //print all even numbers between 0 & 100
    private static void printEvenNumbersOnly(int max){

        //for(int i = 0; i<=max; i++){ //alternate solution
        for(int i = 0; i<=max; i+=2){
            //if(i%2 == 0){
                System.out.println(i);
            //}
        }

    }

}
