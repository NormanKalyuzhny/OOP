import { garagePage } from "../pages/GaragePage";
import { GeneralSteps } from "./general-steps";
import { toolsUtil } from "../Tools/all";

class GarageSteps extends GeneralSteps{

    addNewCar(){
        garagePage.sidePanelElm.garageAddCarBtn().click()
        cy.log('RND Car brand/model is: ', toolsUtil.rndCar.brand, toolsUtil.rndCar.model)
        garagePage.sidePanelElm.carBrand().select(toolsUtil.rndCar.brand);   
        garagePage.sidePanelElm.carModel().select(toolsUtil.rndCar.model);
        garagePage.sidePanelElm.carMileage().type(toolsUtil.rndDigits);
        garagePage.sidePanelElm.addBtn().click();
    };

    checkNewCarAdded(){
        garagePage.sidePanelElm.carName().should('have.text', toolsUtil.rndCar.brand + " " + toolsUtil.rndCar.model);
        garagePage.sidePanelElm.inputMileageField().should('have.value', toolsUtil.rndDigits);
    };

    deleteNewCar(){
        garagePage.sidePanelElm.editCarBtn().click();
        garagePage.sidePanelElm.removeCarBtn().click();
        garagePage.sidePanelElm.removeCarModaleBtn().click();
    };

    checkNewCarDeleted(){
        garagePage.sidePanelElm.textEmptyCar().should('have.text','You don’t have any cars in your garage');
    };
};

export const garageSteps = new GarageSteps();