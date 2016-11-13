package udemy.javaPuzzles;

/**
 * Created by LierreNarcissus on 11/12/16.
 */
public class StringPractice {

    public static void main(String... args){

        String input = "Austin Ethan Anderson";
        System.out.println(getMiddleChars(input));

    }

    //return the middle 3 characters of a string.
    //if less than 3 chars, return the string as-is
    private static String getMiddleChars(String input){

        if(input.length()>3){

            int midPoint = input.length()/2;

            return input.substring(midPoint-1,midPoint+2);

        }

        return input;

    }

    //if the dog is barking and the hour less than 7 or greater than 20, return trouble is true
    private static boolean dogTrouble(boolean barking, int hour){

        return (barking && (hour>=20 || hour<=7));

    }

}
