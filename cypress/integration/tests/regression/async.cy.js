import axios from 'axios'
import { getDataFromUrlSteps, promiseHandlerSteps } from '../../steps/async - steps';
import { urlsData } from '../../data/constant/urlsData';


describe('Async await, Promise', () => {

it ('Task 1', () => {

  function textTime(text,timeout){
    console.log('Task 1 Wait for it...');
    setTimeout(()=>{
      console.log(text);
    }, timeout);
  }

  textTime('Task 1 Boo',2000);

})

it ('Task 2', () => {
  function getTodos() {
    return new Promise((resolve, reject) => {
      axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => { 
              // if (!response.ok) {
              //   throw new Error('Failed to fetch user');
              // }
              resolve (response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
  }

  getTodos()
      .then(todo => {
          console.log('Task 2.1 got Todos:', todo);
      })
      .catch(error => {
          console.error('error appear', error);
      });
      
  function getUser() {
    return new Promise((resolve, reject) => {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
          // if (!response.ok) {
          //   throw new Error('Failed to fetch user');
          // }
          resolve (response.data);
        })
          .catch(error => {
            reject(error);
          });
      });
  }
  
  getUser()
      .then(todo => {
          console.log('Task 2.2 got User', todo);
      })
      .catch(error => {
          console.error('error appear', error);
      });

  let todosResData = getTodos()
  let userResData =  getUser()

  Promise.all([todosResData, userResData])
    .then((results) => {
      console.log('Task 2.3 Promise.all - Todos',todosResData)
      console.log('Task 2.3 Promise.all - User',userResData)
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  Promise.race([todosResData, userResData])
    .then((results) => {
      console.log('Task 2.3 Promise.race - Todos',todosResData)
      console.log('Task 2.3 Promise.race - User',userResData)
    })
    .catch((error) => {
      console.error('Error:', error);
    });

});

it ('Task 3', () => {

  const getTodos = async () => {
    try {
      return await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    } catch (error) {
      console.error(error);
    }
  }

  const getUser = async () => {
    try {
      return await axios.get('https://jsonplaceholder.typicode.com/users/1');
    } catch (error) {
      console.error(error);
    }
  }

  Promise.all([getTodos(), getUser()])
  .then(([todos, user]) => {
    console.log('Task 3 Promise.all Todos:', todos.data);
    console.log('Task 3 Promise.all User:', user.data);
  })
  .catch(error => {
    console.error(error);
  });

  Promise.race([getTodos(), getUser()])
  .then((result) => {
    console.log('Task 3 Promise.race Todos or User', result.data)
  })
  .catch((error) => {
    console.error('Error:', error);
  });

});

it ('Task 4', () =>{
  
getDataFromUrlSteps.getData('https://jsonplaceholder.typicode.com/users/1')
.then(promiseHandlerSteps.resChecker)
.catch(promiseHandlerSteps.errorChecker)

getDataFromUrlSteps.getMultyData('https://jsonplaceholder.typicode.com/todos/1','https://jsonplaceholder.typicode.com/users/1')
.then(promiseHandlerSteps.resMultyCheck)
.catch(promiseHandlerSteps.errorChecker)



const requests = urlsData.urlsUsers.map(url => axios.get(url));

getDataFromUrlSteps.getArrData(requests)
.then(promiseHandlerSteps.resArrCheck)
.catch(promiseHandlerSteps.errorChecker)

})
});

