import { fuelExpanses } from "../steps/fuel_expenses - steps";
import { garageSteps } from "../steps/garage-steps";
import { generalSteps } from "../steps/general-steps";
import { basePage } from "../pages/BasePage";


const rndNumbers = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
};
const eNumber = rndNumbers(1, 1000);

const signInCreds = {
   name: "Some",
   lastname: "New",
   password: "Test!123",
   email: "some.new+"+`${eNumber}`+"@guglo.com",
}

const car = {
   brand: 'Ford',
   model: 'Fusion',
   mileage: '100',
}

describe('Test qaauto', () => {

   before (() => {
      cy.visit('/');
      basePage.generateAccount(signInCreds);    
   });   
   
   beforeEach (() => {
      cy.visit('/');    
      generalSteps.login(signInCreds);
   });

   it ('Add a car', ()=> {

      garageSteps.addNewCar(car); 
      garageSteps.checkNewCarAdded(car);

   })

   it ('Remove a car', ()=> {

      garageSteps.deleteNewCar(car);
      garageSteps.checkNewCarDeleted();

   })
   
   it ('Add fuel expanses', ()=> {
      
      garageSteps.addNewCar(car); 
      fuelExpanses.addFuelExp();
      fuelExpanses.checkAddFuelExp();

   }) 
   
   it ('Remove fuel expanses', ()=> {

      fuelExpanses.deleteFuelExp();
      fuelExpanses.checkFuelExpDeleted();

   }) 

   it ('Delete account', ()=>{

      generalSteps.deleteAccount();

   })

 })