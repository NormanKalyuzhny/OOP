import { garagePage } from "../pages/GaragePage";
import { garageSteps } from "../steps/garage-steps";
import { generalSteps } from "../steps/general-steps";
import { apiSignUp } from "../Api/apiRequest";

describe('Test qaauto with Api', () => {
  
   before (() => {  
      apiSignUp();
      cy.clearCookies();     
   });   
   
   beforeEach (() => {
      cy.visit('/');   
      generalSteps.login(); 
   });

   it ('Check car with Api', () =>{
      garageSteps.addNewCar(garagePage.car); 
      cy.request('/api/cars').then((res)=>{
      cy.log(res.body);
      expect({ brand: 'Ford' }).to.eql({ brand: 'Ford' });
      })
      generalSteps.deleteAccount();
   })
})