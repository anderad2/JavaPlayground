package practice.main;

import java.math.BigDecimal;
import java.math.RoundingMode;

/**
 * Created by LierreNarcissus on 10/27/16.
 */
public class DoublePrecision {

    public static void main(String... args){

        Double toBeTruncated = new Double("3.5789055");

        Double truncatedDouble = BigDecimal.valueOf(toBeTruncated)
                .setScale(3, RoundingMode.HALF_UP)
                .doubleValue();

    }

}
