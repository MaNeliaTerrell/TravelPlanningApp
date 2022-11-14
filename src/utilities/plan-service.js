import * as planAPI from './plan-api'

export async function savingData(savedPlan) {
    // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    const dayPlan = await planAPI.savingData(savedPlan);

    // Baby step by returning whatever is sent back by the server
    // return token;
    localStorage.setItem('dayPlan', dayPlan)
  }
  