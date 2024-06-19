import { garagePage } from "../../pages/GaragePage";
import { garageSteps } from "../../steps/garage-steps";
import { generalSteps } from "../../steps/general-steps";
import { apiSignUp } from "../../Api/apiRequest";
import { toolsUtil } from "../../Tools/all";
import { fuelExpansesStep } from "../../steps/fuel_expenses - steps";


describe('Test qaauto with Api', () => {
  
   before (() => {  
      apiSignUp();
      cy.clearCookies();   
   });   
   
   beforeEach (() => {
      cy.visit('/');   
      generalSteps.login();
      cy.url().should('contain', '/panel/garage');
   });

   it ('Check car with Api', () =>{
      cy.intercept('POST', '/api/cars').as('addCar');
      garageSteps.addNewCar(); 
      cy.wait('@addCar').its('response.statusCode').should('eq',201);
      cy.get('@addCar').its('response.body.data.id').as('addCarId');
      
      //additional task
      cy.get('@addCar').then((res)=>{
         cy.writeFile('cypress/integration/fixtures/addCarRes.json', res.response.body);
      });

      cy.request('/api/cars').then((carList)=>{
         cy.get('@addCarId').then(addCarId => {
            expect(carList.body.data[0].id, 'Car Id').to.equal(addCarId);
         });  
         expect(toolsUtil.rndCar.brand, 'Brand').to.eql(carList.body.data[0].brand);
         expect(toolsUtil.rndCar.model, 'Model').to.eql(carList.body.data[0].model);
         expect(toolsUtil.rndDigits, 'Mileage').to.eql(carList.body.data[0].initialMileage);
      });
   });
   
   it ('Add Fuel Expense via Api', ()=>{    
      cy.fixture('../integration/fixtures/addCarRes.json').then((resCar) => {
         const carId = resCar.data.id
         cy.addExpense(carId, toolsUtil.currentDateFormat(), toolsUtil.rndDigits + 2, 11, 11, false)
         .then((resExp) => {
            cy.writeFile('cypress/integration/fixtures/addExpenseRes.json', resExp.body);
         });
      });
   });

   it ('Fuel Expense check', ()=>{
      cy.fixture('../integration/fixtures/addCarRes.json').then((resCar) => {
         garagePage.sidePanelElm.carName().should('have.text', resCar.data.brand + ' ' + resCar.data.model);
         cy.fixture('../integration/fixtures/addExpenseRes.json').then((resExpense) => {
            garagePage.sidePanelElm.mileageInputField().should('have.value', resExpense.data.mileage);
         });
      });
      
      fuelExpansesStep.addFuelExp();
      fuelExpansesStep.checkAddFuelExp();
    
      cy.fixture('../integration/fixtures/addCarRes.json').then((resCar) => {
         const carid = resCar.data.id;
         cy.request(`api/expenses?carId=${carid}`).then((res) => {
            expect(res.body.totalItems, 'Total expanse records').to.equal(2);
         });
      });
      
      generalSteps.deleteAccount();
      cy.log('Account was deleted');
   });
});