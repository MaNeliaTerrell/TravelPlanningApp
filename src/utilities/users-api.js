
import { getToken } from './users-service';

// This is the base path of the Express route we'll define
const BASE_URL = 'http://localhost:3001/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function logIn(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }

  const token = getToken();
  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}

export async function checkToken(){
      return sendRequest(`${BASE_URL}/check-token`);
}

// export const signUp = async(userData) => {
//     const res = await fetch(BASE_URL, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(userData)
//     })
    
//     if (res.ok){
//         return res.json()

//     }else {
//         throw new Error('Invalid Sign Up')
//     }
// }

// //  =====LOG IN=======

// export const logIn = async(userData) => {
//     const res = await fetch(BASE_URL + '/login', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(userData)
//     })
    
//     if (res.ok){
//         return res.json()

//     }else {
//         throw new Error('Invalid Log In')
//     }
// }
