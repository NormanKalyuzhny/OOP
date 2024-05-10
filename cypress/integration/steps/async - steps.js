import axios from 'axios'

class GetDataFromUrlSteps {
    getData = async (url) => {
        try {
            return await axios.get(url);
            } catch (error) {
                console.error(error);
            }
    };

    getMultyData = async (url1,url2) => {
        try {
            return await axios.all([
                axios.get(url1), 
                axios.get(url2)
              ])
        } catch (error) {
            console.error(error);
        }
    }

    getArrData = async (requests) => {
        try {
            return await axios.all(requests)
        } catch (error) {
            console.error(error);
        }
    }
}

const getDataFromUrlSteps = new GetDataFromUrlSteps()

class PromiseHandlerSteps {
    resChecker = response =>{
        console.log('Single url Data is:',response.data)
        }
      
    errorChecker =  error => {
          console.error(error);
        }

    resMultyCheck = axios.spread((obj1, obj2) => {
        console.log('Several urls Data 1', obj1.data);
        console.log('Several urls Data 2', obj2.data);
      });

    resArrCheck = axios.spread((...responses) => {
        responses.forEach(response => {
            console.log('Array',response.data);
        });
      })
}

const promiseHandlerSteps = new PromiseHandlerSteps()

export {getDataFromUrlSteps,promiseHandlerSteps}