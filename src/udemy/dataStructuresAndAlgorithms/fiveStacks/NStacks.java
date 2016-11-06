package udemy.dataStructuresAndAlgorithms.fiveStacks;

import java.util.*;

/**
 * Created by LierreNarcissus on 10/23/16.
 */
public class NStacks {

    private Map<Integer,ArrayDeque<Integer>> hMap = new TreeMap<>();
    private int stackSize;
    private int numberOfStacks;

    public NStacks(int numStacks, int stackSize){
        this.numberOfStacks = numStacks;
        this.stackSize = stackSize;

        for(int i = 0; i<this.numberOfStacks; i++) {
            hMap.put(i, new ArrayDeque<>());
        }
    }

    public void insert(Integer data){

        ArrayDeque tmp;
        for(int i=0; i<hMap.size(); i++){
            tmp = getDeque(i);

            if(!isFull(tmp)){
                tmp.push(data);
                return;
            }

        }

    }

    public ArrayDeque getDeque(Integer key){
        return hMap.get(key);
    }

    public boolean isFull(ArrayDeque deque){

        if(deque.size()== stackSize)
            return true;
        else
            return false;
    }

    public boolean isEmpty(ArrayDeque deque){

        if(deque.isEmpty())
            return true;
        else
            return false;
    }

    public boolean allStacksFull(){
        return (hMap.get(numberOfStacks-1).size() == stackSize);
    }

    public void displayNStacks(){

        for(int i=0; i<numberOfStacks; i++){
            System.out.println("Stack"+i+" "+hMap.get(i));
        }

    }



}
