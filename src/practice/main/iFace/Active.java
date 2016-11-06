package practice.main.iFace;

import practice.main.helpers.Dinner;
import practice.main.helpers.Groceries;

/**
 * Created by LierreNarcissus on 9/29/16.
 */
public interface Active {
    void goToWork();

    Dinner prepareDinner();

    void workout();

    Groceries getGroceries();

    void study();


}
