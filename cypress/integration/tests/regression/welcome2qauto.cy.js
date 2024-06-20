import { fuelExpansesStep } from "../../steps/fuel_expenses - steps";
import { garageSteps } from "../../steps/garage-steps";
import { generalSteps } from "../../steps/general-steps";
import { basePage } from "../../pages/BasePage";

describe('Test qaauto', () => {

   before (() => {
      cy.visit(Cypress.env("BASE_URL"));   
      basePage.generateAccount(); 
      cy.clearCookies();   
   });   
   
   beforeEach (() => {
      cy.visit(Cypress.env("BASE_URL"));      
      generalSteps.login();
   });

   it ('Add a car', ()=> {
      garageSteps.addNewCar(); 
      garageSteps.checkNewCarAdded();
   })

   it ('Remove a car', ()=> {
      garageSteps.deleteNewCar();
      garageSteps.checkNewCarDeleted();
   })
   
   it ('Add fuel expanses', ()=> {   
      garageSteps.addNewCar(); 
      fuelExpansesStep.addFuelExp();
      fuelExpansesStep.checkAddFuelExp();
   }) 
   
   it ('Remove fuel expanses', ()=> {
      fuelExpansesStep.deleteFuelExp();
      fuelExpansesStep.checkFuelExpDeleted();
   }) 

   it ('Delete account', ()=>{
      generalSteps.deleteAccount();
   })
})