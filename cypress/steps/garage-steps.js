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
        cy.get('app-garage .car_name.h2').should('have.text', car.brand + " " + car.model);
        cy.get('input[name="miles"]').should('have.value', car.mileage);
    };

    deleteNewCar(){
        garagePage.sidePanelElm.editCarBtn().click();
        garagePage.sidePanelElm.removeCarBtn().click();
        garagePage.sidePanelElm.removeCarModaleBtn().click();
    };

    checkNewCarDeleted(){
        cy.get('p.h3.panel-empty_message').should('have.text','You don’t have any cars in your garage');
    };
};

export const garageSteps = new GarageSteps();