import { basePage, garagePageBase } from "../pages/BasePage";
import { garagePage } from "../pages/GaragePage";

export class GeneralSteps {

    login(signInCreds){

        basePage.signInBtn().click()
        //basePage.inputSignInEmail().type('some.new+869@guglo.com')
        basePage.inputSignInEmail().type(signInCreds.email)
        basePage.inputSignInPassword().type(signInCreds.password)
        basePage.loginBtn().click()

    }

    deleteAccount(){

        garagePageBase.sidePanelElm.settingsBtn().click()
        garagePageBase.sidePanelElm.removeAccBtn().click()
        garagePage.sidePanelElm.removeModaleBtn().click()
    }
}

export const generalSteps = new GeneralSteps();