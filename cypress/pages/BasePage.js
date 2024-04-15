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

export const basePage = new BasePage();