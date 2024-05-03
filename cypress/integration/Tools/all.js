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


    currentDateFormat = () => {
        const getDate = new Date()
        const option = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        };
        const currentDate = getDate.toLocaleDateString(option)
        const dateParts = currentDate.split('.')
        const day = dateParts[0];
        const month = dateParts[1];
        const year = dateParts[2];
        const outputDate = `${year}-${month}-${day}`;

        return outputDate
     }
    

}

export const toolsUtil = new Tools();



