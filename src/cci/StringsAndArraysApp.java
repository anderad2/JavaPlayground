package cci;

/**
 * Created by LierreNarcissus on 11/7/16.
 */
public class StringsAndArraysApp {


    public static void main(String... args){

        ///String input = "This is just some practice coding for interview preparation.";
        String input = "flow";
        String test = "wolf";

        StringsAndArrays saa = new StringsAndArrays();

        System.out.println("Does string contain only unique characters? " +saa.isUniqueChars(input));

        System.out.println("Does string contain only unique characters? " +saa.isPermutation(input,test));

    }

}
