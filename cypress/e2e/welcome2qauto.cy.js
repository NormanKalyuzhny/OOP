import { basePage } from "../pages/BasePage";
import { garagePage } from "../pages/GaragePage";

const rndNumbers = (min, max) => {
   return Math.floor(Math.random() * (max - min + 1)) + min;
};
const eNumber = rndNumbers(1, 1000);

const signInCreds = {
   name: "Some",
   lastname: "New",
   pass: "Test!123",
   email: "some.new+"+`${eNumber}`+"@guglo.com",
}
 
 describe('Test qaauto Sign In', () => {
 
    it ('Visit site', ()=> {
      cy.visit('/');
      basePage.generateAccount(signInCreds)
      basePage.garageCheck() 
    })
 })