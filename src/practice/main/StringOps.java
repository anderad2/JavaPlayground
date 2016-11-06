package practice.main;

import java.util.Arrays;
import java.util.Set;
import java.util.TreeSet;
//import org.apache.commons.lang.*;

/**
 * Created by LierreNarcissus on 11/3/16.
 */
public class StringOps {

    public static void main(String... args){


        String input = "This is some freakin bull. I've had 6 interviews, and not 1 offer.  CRAP!!!  MUST.DO.BETTER!!!";

        System.out.println("Original String => "+ input);
        System.out.println("Letters to Zero, Numbers to One => " + replaceOneZero(input));
        System.out.println("Consonants to X => "+replaceConsonants(input));

    }

    private static String replaceOneZero(String input){

        StringBuilder finalVal  = new StringBuilder();
        StringBuilder inputTmp = new StringBuilder(input);


        for (Character c: inputTmp.toString().trim().toCharArray()){
            if(Character.isLetter(c)) {
                finalVal.append("0");
            }else if(Character.isDigit(c)){
                finalVal.append("1");
            }else{
                finalVal.append(c);
            }
        }


        return finalVal.toString();

    }

    private static String replaceConsonants(String input){

        //need a way to escape or ignore the unicode values that cannot be escaped.

        StringBuilder finalVal  = new StringBuilder();
        //StringBuilder inputTmp = new StringBuilder(StringEscapeUtils.unescapeJava(input));
        StringBuilder inputTmp = new StringBuilder(input);

        Set<Character> vowels = new TreeSet<>();
        vowels.add('A');
        vowels.add('E');
        vowels.add('I');
        vowels.add('O');
        vowels.add('U');


        for (Character c: inputTmp.toString().trim().toCharArray()){
            if(Character.isLetter(c) && !vowels.contains(Character.toUpperCase(c))) {
                finalVal.append("X");
            }else{
                finalVal.append(c);
            }
        }
        finalVal.append(" ");

        return finalVal.toString();

    }

}
