const { defaultAPIURL } = require("../config");

// Massa atau Lembaga
export const getQuestListMassaLembaga = async (status) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/quests/${status}/`, {
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

export const getQuestDetails = (id) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/quests/${id}/`, {
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

export const upvoteQuest = (questId) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/quest-upvotes/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          quest: questId
        })
      })
      response = response.json()
      console.log(response)

      resolve(response);
    } catch (e) {
      reject(e);
    }
  });

export const cancelUpvoteQuest = (questId) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/quest-upvotes/${questId}/`, {
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

export const createQuest = (data) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/quests/`, {
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

export const createQuestAdmin = (data) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/quests-admin/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      console.log(response)

      const httpStatus = response.status
      const res = JSON.parse(JSON.stringify(response.json()))
      res.httpStatus = httpStatus

      resolve(res)
    } catch (e) {
      reject(e);
    }
  });

// Kandidat
export const getQuestListKandidat = async (status) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/quests-kandidat/${status}/`, {
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

export const acceptQuestKandidat = async (questId) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/quests-kandidat/accept/${questId}/`, {
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

export const declineQuestKandidat = async (questId) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/quests-kandidat/decline/${questId}/`, {
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

export const forfeitQuestKandidat = async (questId) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/quests-kandidat/forfeit/${questId}/`, {
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

export const createQuestProof = (data) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/quest-proofs/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      console.log(response)
      response = response.json()

      resolve(response);
    } catch (e) {
      reject(e);
    }
  });