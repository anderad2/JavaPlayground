package practice.main;

/**
 * Created by LierreNarcissus on 9/29/16.
 */
public class InstanceInitializers {


    private String name = "Angela";

    public InstanceInitializers(){
        this.name = "Anderson";
        System.out.println("Set the constructor");
    }

    {
        System.out.println("The initialization block for "+this.name);
    }

    public static void main(String[] args){

        InstanceInitializers init = new InstanceInitializers();
        System.out.println("And my name is: "+init.name);

    }

    static {
        System.out.println("The STATIC initialization block for ANGELA ");
    }

}
