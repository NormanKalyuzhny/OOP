import { userDataObj } from "../data/constant/userData";

class Tools {

    genRndNumbers = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    genRndPassword = (length) => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-='; 
 
    let password = '';
    for (let i = 0; i < length; i++) {
        const rndIndex = Math.floor(Math.random() * chars.length);
        password += chars[rndIndex];
    }
 
    return password;
    };

    rndDigits = this.genRndNumbers(1,1000);

    rndEmail = `${userDataObj.name}.${userDataObj.lastname}+${this.rndDigits}@guglo.com`;
    
    rndPassword = this.genRndPassword(8);

}

export const toolsUtil = new Tools();



