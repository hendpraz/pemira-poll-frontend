const { defaultAPIURL } = require("../config");

export const listUsers = async () =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/users/`, {
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

export const createUser = async (data) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/users/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      response = response.json()
      console.log(response)

      resolve(response);
    } catch (e) {
      reject(e);
    }
  });

export const createKandidat = async (data) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/kandidat-register/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      console.log(response)
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });