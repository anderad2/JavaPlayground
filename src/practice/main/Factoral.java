package practice.main;

/**
 * Created by LierreNarcissus on 11/18/16.
 */
public class Factoral {

    public static void main(String... args){

     System.out.println("Fac: "+calculate(10));
        System.out.println("FacR: "+calculateRecursively(10,1));

    }

    private static int calculate(int val){

        int result = 1;

        for(int i = val; i>0; i--){
            //System.out.println(""+result+"*"+i);
            result = result * i;

        }

        return result;

    }

    private static int calculateRecursively(int val, int result){

        if(val == 0){
            return result;
        }

        //System.out.println(""+result+"*"+val);
        result = result * val--;

        return  calculateRecursively(val,result);}








}
