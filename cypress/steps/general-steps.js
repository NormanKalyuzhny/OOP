import { basePage, garagePageBase } from "../pages/BasePage";
import { garagePage } from "../pages/GaragePage";
import { toolsUtil } from "../Tools/all";

export class GeneralSteps {

    login(signInCreds){
        basePage.signInBtn().click()
        //basePage.inputSignInEmail().type('some.new+869@guglo.com')
        basePage.inputSignInEmail().type(toolsUtil.rndEmail)
        basePage.inputSignInPassword().type(toolsUtil.rndPassword)
        basePage.loginBtn().click()
    }

    deleteAccount(){
        garagePageBase.sidePanelElm.settingsBtn().click()
        garagePageBase.sidePanelElm.removeAccBtn().click()
        garagePage.sidePanelElm.removeModaleBtn().click()
    }
}

export const generalSteps = new GeneralSteps();