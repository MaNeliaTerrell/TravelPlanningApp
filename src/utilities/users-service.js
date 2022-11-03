
import * as usersAPI from './users-api'

export async function signUp(userData) {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const token = await usersAPI.signUp(userData);

    // Baby step by returning whatever is sent back by the server
    // return token;

    localStorage.setItem('token', token)
    return getUser()
  }

// ======= LOG IN =========

export async function logIn(credentials) {
  // Delegate the network request code to the users-api.js API module
  // which will ultimately return a JSON Web Token (JWT)
  const token = await usersAPI.logIn(credentials);

  // Baby step by returning whatever is sent back by the server
  // return token;

  localStorage.setItem('token', token)
  return getUser()
}

  export async function checkToken(){
    // Just so that you don't forget how to use .then
    return usersAPI.checkToken()
    // checkToken returns a string, but let's
    // make it a Date object for more flexibility
    .then(dateStr => new Date(dateStr));
  }

  export function getToken(){
    // get token from local storage
    const token = localStorage.getItem('token')
    if (!token) return null;

    // if we have a token
    const payload = JSON.parse(atob(token.split('.')[1]))
    console.log(payload);

    if (payload.exp < Date.now() / 1000){
      localStorage.removeItem('token')
      return null
    }
    return token;
  }

  export function getUser(){
    const token = getToken()
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
  }

  export function logOut() {
    localStorage.removeItem('token');
    }