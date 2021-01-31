const { defaultAPIURL } = require("../config");

export const voteK3M = async (data) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/vote-k3m/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const resJSON = response.json()
      console.log(resJSON)
      
      const httpStatus = response.status
      const res = JSON.parse(JSON.stringify(resJSON))
      res.httpStatus = httpStatus

      resolve(res);
    } catch (e) {
      reject(e);
    }
  });

export const voteMWA = async (data) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/vote-mwa/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const resJSON = response.json()
      console.log(resJSON)

      const httpStatus = response.status
      const res = JSON.parse(JSON.stringify(resJSON))
      res.httpStatus = httpStatus

      resolve(res);
    } catch (e) {
      reject(e);
    }
  });