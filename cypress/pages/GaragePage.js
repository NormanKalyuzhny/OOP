import { BasePage } from "./BasePage";
export class GaragePage extends BasePage {

sidePanelElm = {

    expAddBtn: () => {
        return cy.get('button.btn.btn-primary');
    },

    garageAddCarBtn: () => {
        return cy.xpath('//button[.="Add car"]');
    },
    
    //Add a car modal window   
    carBrand: () => {
        return cy.get('#addCarBrand');
    },

    carModel: () => {
        return cy.get('#addCarModel');
    },

    carMileage: () => {
        return cy.get('#addCarMileage');  
    },

    cancelBtn: () => {
        return cy.get('button.btn.btn-secondary');
    },

    addBtn: () => {
        return cy.get('.modal-footer.d-flex.justify-content-end .btn.btn-primary');
    },

    //Added car block
    mileageUpdateInput : () => {
        return cy.get('input[formcontrolname="miles"]');
    },

    mileageUpdateBtn : () => {
        return cy.get('button.update-mileage-form_submit.btn.btn-secondary.btn-sm');
    },

    editCarBtn : () => {
        return cy.get('button .icon.icon-edit');
    },

        carCreationDate : () => {
            return cy.get('#carCreationDate');
        },

        removeCarBtn : () => {
            return cy.get('button.btn.btn-outline-danger');
        },
        
        removeCarModaleBtn : () => {
            return cy.get('app-remove-car-modal .btn.btn-danger');
        },

        datePickerBtn : () => {
            return cy.get('button.btn.date-picker-toggle') ;
        },

    addFuelExpenseBtn : () => {
        return cy.get('button.car_add-expense.btn.btn-success'); 
    },

        addFuelExpenseBtnClose : () => {
            return cy.get('div .modal-content button.close'); 
        },

        addExpenseVehicle : () => {
            return cy.get('#addExpenseCar'); 
        },

        addExpenseReportDate : () => {
            return cy.get('#addExpenseDate');
        },

        addExpenseMileage : () => {
            return cy.get('#addExpenseMileage');
        },

        addExpenseLiters : () => {
            return cy.get('#addExpenseLiters');
        },

        addExpenseTotalCost : () => {
            return cy.get('#addExpenseTotalCost');
        },
    removeModaleBtn : () => {
        return cy.get('div .modal-content button.btn.btn-danger')
    }
}
}

export const garagePage = new GaragePage();