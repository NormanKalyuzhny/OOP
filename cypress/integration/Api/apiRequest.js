import { userDataObj } from "../data/constant/userData";
import { toolsUtil } from "../Tools/all";

export function apiSignUp(){
    cy.request({
        method: 'POST',
        url: '/api/auth/signup',
        headers: {
           "accept": "text/plain",
           "Content-Type": "application/json"   
        },
        body: {  
           name: userDataObj.name, 
           lastName: userDataObj.lastname,
           email: toolsUtil.rndEmail,
           password: toolsUtil.rndPassword,
           repeatPassword: toolsUtil.rndPassword,  
        }
     }).then((res) => {
        expect(res.status).to.eq(201);
        cy.log("Response code is: " + res.status);
        cy.log("Duration is: " + res.duration + "ms");
        cy.log("Email is: " + toolsUtil.rndEmail);    
        cy.log("Password is: "+ toolsUtil.rndPassword)
     }); 
}