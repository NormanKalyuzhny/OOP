 class BasePage {
   
    signInButton(){
        return cy.xpath('//button[@class="hero-descriptor_btn btn btn-primary"]');
    }

    signupName(){
        return cy.xpath('//input[@id="signupName"]');
    }

    signupLastName(){
        return cy.xpath('//input[@id="signupLastName"]');
    }

    signupEmail(){
        return cy.xpath('//input[@id="signupEmail"]');
    }

    signupPassword(){
        return cy.xpath('//input[@id="signupPassword"]');
    }
    
    signupRepeatPassword(){
        return cy.xpath('//input[@id="signupRepeatPassword"]');
    }

    registerButton(){
        return cy.xpath('//button[@class="btn btn-primary"]');
    }

    generateAccount(signInCreds){
        this.signInButton().click();
        this.signupName().type(signInCreds.name).should('have.value', signInCreds.name);
        this.signupLastName().type(signInCreds.lastname).should('have.value', signInCreds.lastname);
        this.signupEmail().type(signInCreds.email).should('have.value', signInCreds.email);
        this.signupPassword().type(signInCreds.pass).should('have.value', signInCreds.pass);
        this.signupRepeatPassword().type(signInCreds.pass).should('have.value', signInCreds.pass);  
    }

    profBtnSide(){
        return cy.xpath('//a[@class="btn btn-white btn-sidebar sidebar_btn -profile"]')
    }

    userName(){
        return cy.xpath('//p[@class="profile_name display-4"]')
    }

    garageCheck(){
        this.registerButton().click();
        cy.url().should('eq', 'https://qauto2.forstudy.space/panel/garage');
        this.profBtnSide().click();
        this.userName().should('have.text', 'Some New');
    }    
}

class GaragePage extends BasePage {

    headerElm = {
        
        garageHeadBtn: () => {
            cy.get('a.btn.header-link[routerlink="/panel/garage"]');
        },
    
        expensesHeadBtn: () => {
            cy.get('a.btn.header-link[routerlink="/panel/expenses"]');
        },
    
        instructionsHeadBtn: () => {
            cy.get('a.btn.header-link[routerlink="/panel/instructions"]');
        },
    
        myHeadProfileBtn: () => {
            cy.get('button#userNavDropdown');
        },
        //header drop-down
        garageDropBtn: () => {
            cy.get('a.dropdown-item.btn.btn-link.user-nav_link[href="/panel/garage"]');
        },
    
        expensesDropBtn: () => {
            cy.get('a.dropdown-item.btn.btn-link.user-nav_link[href="/panel/expenses"]');
        },
    
        instructionsDropBtn: () => {
            cy.get('a.dropdown-item.btn.btn-link.user-nav_link[href="/panel/instructions"]');
        },
    
        profileDropBtn: () => {
            cy.get('a.dropdown-item.btn.btn-link.user-nav_link[href="/panel/profile"]');
        },
    
        settingsDropBtn: () => {
            cy.get('a.dropdown-item.btn.btn-link.user-nav_link[href="/panel/settingss"]')
        },
    
        logOutDropBtn: () => {
            cy.get('button.dropdown-item.btn.btn-link.user-nav_link')
        },
    
    }
        
    sidePanelElm = {
    
        garageBtn: () => { 
             cy.get('a[routerlink="garage"]');
        },
        
        expensesBtn: () => {
             cy.get('a[routerlink="expenses"]');
        },
        
        instructionsBtn: () => {
             cy.get('a[routerlink="instructions"]');
        },
        
        profBtnSide: () => {
             cy.get('a[routerlink="profile"]');
        },
        
        settingsBtn: () => {
             cy.get('a[routerlink="settings"]');
        }, 
        
        logOutBtn: () => {
            cy.get('a.btn.btn-link.text-danger.btn-sidebar.sidebar_btn');
        }    
    }
    
    footerElm = {
        firstText: () => {
            cy.get('.col-7.d-flex.flex-column.justify-content-center.footer_item.-left p:first-of-type')
        },
    
        secondText: () => {
            cy.get('.col-7.d-flex.flex-column.justify-content-center.footer_item.-left p:nth-of-type(2)')
        },
    
        footerLogo: () => {
            cy.get('a.footer_logo[href="/"]')
        }
    }    
    }

export const basePage = new BasePage();