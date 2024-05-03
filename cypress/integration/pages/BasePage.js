import { userDataObj } from "../data/constant/userData";
import { toolsUtil } from "../Tools/all";

export class BasePage {

    signInBtn(){
        return cy.xpath('//button[@class="btn btn-outline-white header_signin"]');
    }

    inputSignInEmail(){
        return cy.xpath('//input[@id="signinEmail"]');
    }

    inputSignInPassword(){
        return cy.xpath('//input[@id="signinPassword"]');
    }

    loginBtn(){
        return cy.xpath('//div[@class="modal-footer d-flex justify-content-between"]/child::button[@class="btn btn-primary"]');
    }
   
    signUpBtn(){
        return cy.xpath('//button[@class="hero-descriptor_btn btn btn-primary"]');
    }

    inputSignupName(){
        return cy.xpath('//input[@id="signupName"]');
    }

    inputSignupLastName(){
        return cy.xpath('//input[@id="signupLastName"]');
    }

    inputSignupEmail(){
        return cy.xpath('//input[@id="signupEmail"]');
    }

    inputSignupPassword(){
        return cy.xpath('//input[@id="signupPassword"]');
    }
    
    inputSignupRepeatPassword(){
        return cy.xpath('//input[@id="signupRepeatPassword"]');
    }

    registerButton(){
        return cy.xpath('//button[@class="btn btn-primary"]');
    }
    
    profBtnSide(){
        return cy.xpath('//a[@class="btn btn-white btn-sidebar sidebar_btn -profile"]');
    }

    garageUserName(){
        return cy.xpath('//p[@class="profile_name display-4"]');
    }

    generateAccount(){

        this.signUpBtn().click();
        this.inputSignupName().type(userDataObj.name).should('have.value', userDataObj.name);
        this.inputSignupLastName().type(userDataObj.lastname).should('have.value', userDataObj.lastname);
        this.inputSignupEmail().type(toolsUtil.rndEmail).should('have.value', toolsUtil.rndEmail);
        this.inputSignupPassword().type(toolsUtil.rndPassword).should('have.value', toolsUtil.rndPassword);
        this.inputSignupRepeatPassword().type(toolsUtil.rndPassword).should('have.value', toolsUtil.rndPassword); 
        this.registerButton().click();
        cy.url().should('eq', 'https://qauto2.forstudy.space/panel/garage');
        garagePageBase.sidePanelElm.logOutBtn().click()

    }  
}

export class GaragePage extends BasePage {

    headerElm = {
        
        garageHeadBtn: () => {
            return cy.get('a.btn.header-link[routerlink="/panel/garage"]');
        },
    
        expensesHeadBtn: () => {
            return cy.get('a.btn.header-link[routerlink="/panel/expenses"]');
        },
    
        instructionsHeadBtn: () => {
            return cy.get('a.btn.header-link[routerlink="/panel/instructions"]');
        },
    
        myHeadProfileBtn: () => {
            return cy.get('button#userNavDropdown');
        },
        //header drop-down
        garageDropBtn: () => {
            return cy.get('a.dropdown-item.btn.btn-link.user-nav_link[href="/panel/garage"]');
        },
    
        expensesDropBtn: () => {
            return cy.get('a.dropdown-item.btn.btn-link.user-nav_link[href="/panel/expenses"]');
        },
    
        instructionsDropBtn: () => {
            return cy.get('a.dropdown-item.btn.btn-link.user-nav_link[href="/panel/instructions"]');
        },
    
        profileDropBtn: () => {
            return cy.get('a.dropdown-item.btn.btn-link.user-nav_link[href="/panel/profile"]');
        },
    
        settingsDropBtn: () => {
            return cy.get('a.dropdown-item.btn.btn-link.user-nav_link[href="/panel/settingss"]');
        },
    
        logOutDropBtn: () => {
            return cy.get('button.dropdown-item.btn.btn-link.user-nav_link');
        },
    
    }
        
    sidePanelElm = {
    
        garageBtn: () => { 
            return cy.get('a[routerlink="garage"]');
        },
        
        expensesBtn: () => {
            return cy.get('a[routerlink="expenses"][href="/panel/expenses"]');
        },
        
        instructionsBtn: () => {
            return cy.get('a[routerlink="instructions"]');
        },
        
        profBtnSide: () => {
            return cy.get('a[routerlink="profile"]');
        },
        
        settingsBtn: () => {
            return cy.get('a[routerlink="settings"]');
        }, 

        logOutBtn: () => {
            return cy.get('a.btn.btn-link.text-danger.btn-sidebar.sidebar_btn');
        }, 

        removeAccBtn: () => {
            return cy.get('button.btn.btn-danger-bg');
        }
           
    }
    
    footerElm = {
        firstText: () => {
            return cy.get('.col-7.d-flex.flex-column.justify-content-center.footer_item.-left p:first-of-type');
        },
    
        secondText: () => {
            return cy.get('.col-7.d-flex.flex-column.justify-content-center.footer_item.-left p:nth-of-type(2)');
        },
    
        footerLogo: () => {
            return cy.get('a.footer_logo[href="/"]');
        }
    }   
}

export const basePage = new BasePage();
export const garagePageBase = new GaragePage();