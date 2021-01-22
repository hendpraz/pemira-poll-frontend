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