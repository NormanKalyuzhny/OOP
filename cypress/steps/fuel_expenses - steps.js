import { garagePageBase } from "../pages/BasePage";
import { garagePage } from "../pages/GaragePage";
import { GeneralSteps } from "./general-steps";



class FuelExpenses extends GeneralSteps{

    addFuelExp(){

        garagePageBase.sidePanelElm.expensesBtn().click();
        garagePage.sidePanelElm.expAddBtn().click();
        garagePage.sidePanelElm.addExpenseMileage().type('1');
        garagePage.sidePanelElm.addExpenseLiters().type('10');
        garagePage.sidePanelElm.addExpenseTotalCost().type('10');
        garagePage.sidePanelElm.addBtn().click();
        
    }

    checkAddFuelExp(){

        cy.get('table.table.expenses_table').should('exist');

    }

    deleteFuelExp(){
        garagePageBase.sidePanelElm.expensesBtn().click();
        cy.get('div .expenses_table-wrapper button.btn.btn-delete').click({force: true});
        garagePage.sidePanelElm.removeModaleBtn().click();

    }

    checkFuelExpDeleted(){

        cy.get('div p.h3.panel-empty_message').should('have.text','You don\’t have any fuel expenses filed in');
        
    }
}

export const fuelExpanses = new FuelExpenses();