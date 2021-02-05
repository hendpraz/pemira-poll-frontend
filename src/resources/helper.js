export const get = async (url) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
      response = await response.json()

      resolve(response)
    } catch (e) {
      reject(e);
    }
  });

export const post = (url, data) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      response = await response.json()

      resolve(response)
    } catch (e) {
      reject(e);
    }
  });

export const patch = async (url) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
      response = await response.json()

      resolve(response)
    } catch (e) {
      reject(e);
    }
  });

export const patchWithBody = async (url, data) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      response = await response.json()

      resolve(response)
    } catch (e) {
      reject(e);
    }
  });