package udemy.dataStructuresAndAlgorithms.stack;

/**
 * Created by LierreNarcissus on 10/18/16.
 */
public class StackApp {


    public static void main(String... args){

        Stack stack = new Stack(5);
        stack.push(12);
        stack.push(45);
        stack.push(35);
        stack.push(56);
        stack.push(7);
        stack.push(23);

        for(int i=0;i<stack.getSize();i++){
            int val = stack.pop();
            System.out.println(val);
        }

        Stack charStack = new Stack("Angela is a BOSS!!!");
        for(int i=0;i<charStack.getSize();i++){
            char val = charStack.popChars();
            System.out.print(val);
            //System.out.println((int)(Math.random()*5));
        }


    }

}
