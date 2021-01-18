const { defaultAPIURL } = require("../config");

export const getMyProfile = async () =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/my-profile/`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
      response = response.json()
      console.log(response)

      resolve(response);
    } catch (e) {
      reject(e);
    }
  });

export const loginINA = async (ticket) =>
  new Promise(async (resolve, reject) => {    
    try {
      let response = await fetch(`${defaultAPIURL}/login/INA/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ticket
        })
      })
      response = response.json()
      console.log(response)

      resolve(response)
    } catch (e) {
      reject(e);
    }
  });

export const loginNonINA = async (username, password) =>
  new Promise(async (resolve, reject) => {    
    try {
      let response = await fetch(`${defaultAPIURL}/login/non-INA/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      })
      response = response.json()
      console.log(response)

      resolve(response)
    } catch (e) {
      reject(e);
    }
  });