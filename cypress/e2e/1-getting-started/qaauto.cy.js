const rndNumbers = (min,max) =>{
   return Math.floor(Math.random() * (max - min + 1)) + min;
   }
const eNumber = rndNumbers(1, 1000);

const loginCreds = {
   name: "guest",
   pass: "welcome2qauto"
}

const signInCreds = {
   name: "Some",
   lastname: "New",
   pass: "Test!123"
}

const email = `${signInCreds.name.toLowerCase()}.${signInCreds.lastname.toLowerCase()}+${eNumber}`;

describe('Test qaauto Sign In', () => {

   it ('Visit site', ()=> {
    cy.visit(loginCreds.name + ':' + loginCreds.pass +'@qauto2.forstudy.space');
    cy.get('button.hero-descriptor_btn').click();
    cy.get('input#signupName')
    .type(signInCreds.name)
    .should('have.value', signInCreds.name);
    cy.get('input#signupLastName')
    .type(signInCreds.lastname)
    .should('have.value', signInCreds.lastname);
    cy.get('input#signupEmail')
    .type(email + "@guglo.com")
    .should('have.value', email + "@guglo.com");
    cy.get('input#signupPassword')
    .type(signInCreds.pass)
    .should('have.value', signInCreds.pass);
    cy.get('input#signupRepeatPassword')
    .type(signInCreds.pass)
    .should('have.value', signInCreds.pass);
    cy.get('.modal-footer button.btn.btn-primary').click();
    cy.get('h1')
    .should('have.text', 'Garage');

   switch('dropdown-toggle') { 
    case 'side-panel':  
      cy.get('a[href="/panel/profile"].sidebar_btn').click();
      cy.get('div p.profile_name.display-4')
      .should('have.text', signInCreds.name + ' ' + signInCreds.lastname);
      break;

    case 'dropdown-toggle':  
      cy.get('#userNavDropdown.dropdown-toggle').click();
      cy.get('a[ngbdropdownitem][href="/panel/profile"]').click();
      cy.get('div p.profile_name.display-4')
      .should('have.text', signInCreds.name + ' ' + signInCreds.lastname);
      break;
   }
   })
})

