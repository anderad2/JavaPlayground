package cci;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;

/**
 * Created by LierreNarcissus on 11/7/16.
 */
public class StringsAndArrays {

    /*
    Implement an algorithm to determine if a string has all unique characters
     */
    public boolean isUniqueChars(String input){

        if(input.length() > 256){  //128 = ASCII; 256 = Unicode
            return false;
        }

        boolean[] char_set = new boolean[256];

        for(char c:input.toCharArray()){

            if(char_set[(int)c]){
                return false;
            }

            char_set[(int)c] = true;

        }

        return true;

    }

    /*
    Given two strings, determine if one if a permutation of the other
     */
    public boolean isPermutation(String input, String test){

        char[] str1 = input.toLowerCase().toCharArray();
        Arrays.sort(str1);

        char[] str2 = test.toLowerCase().toCharArray();
        Arrays.sort(str2);

        if((str1.length == str2.length) && (new String(str1).equals(new String(str2)))){
            return true;
        }

        return false;
    }

    /*
    Given a string, write a function to check if its a permutation of a palindrome.
     */
    public boolean isPalindrome(String input){

        //first test if it is a palindrome
        ArrayList<Character> inputList = new ArrayList();
        char[] inputArray = input.toCharArray();
        for(char c: inputArray){
            inputList.add(c);
        }
        Collections.reverse(inputList);

        return input.equalsIgnoreCase(inputList.toString());
    }


    /*
    Given two strings determine if they are one or zero edits from being the same
     */
    public boolean isOneOrZeroEditsFromSame(String str1, String str2){

        for(int i = 0; i<str1.length(); i++){

            if(str1.charAt(i) != str2.charAt(i)){

                //if()

            }

        }

        return false;

    }




}
