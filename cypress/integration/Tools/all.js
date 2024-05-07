import { userDataObj } from "../data/constant/userData";
import { carData } from "../data/constant/carData";

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
    
    rndCarGen = () => {
        const rndBrandIndex = Math.floor(Math.random() * carData.carBrands.length)
        const rndBrand = carData.carBrands[rndBrandIndex]
        //console.log(rndBrand)
        const models = carData.carModels[rndBrand]
        //console.log(models)
    
        const rndModelIndex = Math.floor(Math.random() * models.length)
        const rndModels = models[rndModelIndex] 
        //console.log(rndModels)
    
        return {brand:rndBrand, model:rndModels}
    };
    
    rndCar = this.rndCarGen();
}

export const toolsUtil = new Tools();



