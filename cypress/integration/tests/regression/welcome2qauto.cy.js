import { fuelExpansesStep } from "../../steps/fuel_expenses - steps";
import { garageSteps } from "../../steps/garage-steps";
import { generalSteps } from "../../steps/general-steps";
import { basePage } from "../../pages/BasePage";
import { garagePage } from "../../pages/GaragePage";

describe('Test qaauto', () => {

   before (() => {
      cy.visit('/');
      basePage.generateAccount(); 
      cy.clearCookies();   
   });   
   
   beforeEach (() => {
      cy.visit('/');    
      generalSteps.login();
   });

   it ('Add a car', ()=> {
      garageSteps.addNewCar(); 
      garageSteps.checkNewCarAdded();
   })

   it.skip ('Remove a car', ()=> {
      garageSteps.deleteNewCar(garagePage.car);
      garageSteps.checkNewCarDeleted();
   })
   
   it.skip ('Add fuel expanses', ()=> {   
      garageSteps.addNewCar(garagePage.car); 
      fuelExpansesStep.addFuelExp();
      fuelExpansesStep.checkAddFuelExp();
   }) 
   
   it.skip ('Remove fuel expanses', ()=> {
      fuelExpansesStep.deleteFuelExp();
      fuelExpansesStep.checkFuelExpDeleted();
   }) 

   it ('Delete account', ()=>{
      generalSteps.deleteAccount();
   })
})