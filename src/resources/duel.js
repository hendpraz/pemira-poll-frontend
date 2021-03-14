const { defaultAPIURL } = require("../config")
const { get, patch, post, patchWithBody } = require("./helper")

// Massa atau Lembaga
export const getDuelListMassaLembaga = async (status) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/duels/${status}/`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
      response = response.json()

      resolve(response);
    } catch (e) {
      reject(e);
    }
  });

export const getDuelDetails = (id) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/duels/${id}/`, {
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

export const upvoteDuel = (duelId) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/duel-upvotes/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          duel: duelId
        })
      })
      response = response.json()
      console.log(response)

      resolve(response);
    } catch (e) {
      reject(e);
    }
  });

export const cancelUpvoteDuel = (duelId) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/duel-upvotes/${duelId}/`, {
        method: 'DELETE',
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

// Massa, Lembaga, or Admin can use this
export const createDuelMassaLembaga = async (data) =>
{
  const url = `${defaultAPIURL}/duels/`
  const response = await post(url, data)

  return response
}

// Kandidat can use this
export const createDuelKandidat = async (data) =>
{
  const url = `${defaultAPIURL}/duels-kandidat/create/`
  const response = await post(url, data)

  return response
}

export const createDuelAdmin = async (data) =>
{
  const url = `${defaultAPIURL}/duels-admin/`
  const response = await post(url, data)

  return response
}

// Kandidat
export const getDuelListKandidat = async (status) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/duels-kandidat/${status}/`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
      response = response.json()

      resolve(response);
    } catch (e) {
      reject(e);
    }
  });

export const acceptDuelKandidat = async (duelId) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/duels-kandidat/accept/${duelId}/`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
      response = response.json()

      resolve(response);
    } catch (e) {
      reject(e);
    }
  });

export const declineDuelKandidat = async (duelId) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/duels-kandidat/decline/${duelId}/`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
      response = response.json()

      resolve(response);
    } catch (e) {
      reject(e);
    }
  });

export const forfeitDuelKandidat = async (duelId) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/duels-kandidat/forfeit/${duelId}/`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`
        },
      })
      response = response.json()

      resolve(response);
    } catch (e) {
      reject(e);
    }
  });

// Admin

export const getAllNotAcceptedDuel = async () =>
  {
    const url = `${defaultAPIURL}/duels-admin/list/not-accepted/`
    const response = await get(url)

    return response.data
  }

export const getAllEverAcceptedDuel = async () =>
  {
    const url = `${defaultAPIURL}/duels-admin/list/ever-accepted/`
    const response = await get(url)

    return response.data
  }

export const adminDuelAccept = async (duelId) =>
  {
    const url = `${defaultAPIURL}/duels-admin/accept/${duelId}/`
    const response = await patch(url)

    return response
  }

export const adminDuelReject = async (duelId) =>
  {
    const url = `${defaultAPIURL}/duels-admin/reject/${duelId}/`
    const response = await patch(url)

    return response
  }

  export const adminDuelFinish= async (duelId, data) =>
  {
    const url = `${defaultAPIURL}/duels-admin/finish//${duelId}/`
    const response = await patchWithBody(url, data)

    return response
  }