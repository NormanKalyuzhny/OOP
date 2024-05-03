import { garagePage } from "../pages/GaragePage";
import { GeneralSteps } from "./general-steps";

class GarageSteps extends GeneralSteps{

    addNewCar(car){
        garagePage.sidePanelElm.garageAddCarBtn().click();
        garagePage.sidePanelElm.carBrand().select(car.brand);
        garagePage.sidePanelElm.carModel().select(car.model);
        garagePage.sidePanelElm.carMileage().type(car.mileage);
        garagePage.sidePanelElm.addBtn().click();
    };

    checkNewCarAdded(car){
        garagePage.sidePanelElm.carName().should('have.text', car.brand + " " + car.model);
        garagePage.sidePanelElm.inputMileageField().should('have.value', car.mileage);
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