package udemy.dataStructuresAndAlgorithms.stack;

/**
 * Created by LierreNarcissus on 10/18/16.
 */
public class Stack {

    private int top;
    private int[] array;
    private char[] charArray;
    private int size;


    public Stack(int size){
        this.top = -1;
        this.size = size;
        this.array = new int[size];
    }

    public Stack(String val){

        this.size = val.length();
        this.top = this.size-1;
        this.charArray = val.toCharArray();
    }

    public void push(int val){
        if(!isFull()) {
            top++;
            array[top] = val;
        }else{
            System.out.println("This stack is on FULL!");
        }
    }

    public int pop(){
        if(!isEmpty()) {
            int oldTop = top;
            top--;
            return array[oldTop];
        }else{
            System.out.println("This stack has NOTHIN left to give! This stack is EMPTY");
            return -1;
        }
    }

    public int peek(){
        if(!isEmpty()){
            return array[top];
        }else{
            System.out.println("There's NOTHING to see here!  This stack is EMPTY!");
            return -1;
        }

    }

    public boolean isEmpty(){
        return (top == -1);
    }

    public boolean isFull(){
        return (top == size-1);
    }

    public int[] getStack(){
        return this.array;
    }

    public int getSize(){
        return this.size;
    }

    public char popChars(){
        int oldTop = top;
        top--;
        return charArray[oldTop];

    }

    public char[] getCharStack(){
        return this.charArray;
    }


}
