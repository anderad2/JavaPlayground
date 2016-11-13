package practice.main;

import java.io.*;
import java.math.BigDecimal;
import java.math.RoundingMode;

/**
 */
public class SerializeDeserialize implements Serializable {

    private String name = "test";
    private Integer testVal = 1;


    public static void main(String... args){

        SerializeDeserialize test = new SerializeDeserialize();

            serialize(test);


            SerializeDeserialize result = (SerializeDeserialize)deserialize();
            System.out.println("Result from file => Name: "+result.getName());
            System.out.println("Result from file => TestVal: "+result.getTestVal());






    }

    private static <T> void serialize(T object){

        File dataFile = new File(System.getProperty("user.home"),"\\.cdm");

        if(!dataFile.exists()){
            dataFile.mkdirs();
            dataFile.setWritable(true);
            dataFile.setReadable(true);
        }

        dataFile = new File(dataFile,"data.cdm");


        //System.out.println(dataFile.getAbsolutePath());

        try(ObjectOutputStream out = new ObjectOutputStream(
                new BufferedOutputStream(new FileOutputStream(dataFile))
        )){
            dataFile.createNewFile();
            out.writeObject(object);
        }catch(IOException e){
            e.printStackTrace();
        }

    }

    private static Object deserialize(){

        Object result = null;
        File dataFile = new File(System.getProperty("user.home"),File.separator+".cdm"+File.separator+"data.cdm");

        try(ObjectInputStream in = new ObjectInputStream(
                new BufferedInputStream(new FileInputStream(dataFile))
        )){

            result = in.readObject();

            /*if(object instanceof DashboardForm){
            	result = (DashboardForm)object;
            }*/
        }catch(IOException | ClassNotFoundException  e){
            e.printStackTrace();
        }

        return result;
    }



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getTestVal() {
        return testVal;
    }

    public void setTestVal(Integer testVal) {
        this.testVal = testVal;
    }
}