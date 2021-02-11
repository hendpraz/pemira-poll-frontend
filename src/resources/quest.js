const { defaultAPIURL } = require("../config")
const { get, patch, post } = require("./helper")

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

// Massa, Lembaga, or Admin can use this
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

export const createQuestAdmin = async (data) =>
{
  const url = `${defaultAPIURL}/quests-admin/`
  const response = await post(url, data)

  return response
}

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

// Admin

export const getAllNotAcceptedQuest = async () =>
  {
    const url = `${defaultAPIURL}/quests-admin/list/not-accepted/`
    const response = await get(url)

    return response.data
  }

export const getAllEverAcceptedQuest = async () =>
  {
    const url = `${defaultAPIURL}/quests-admin/list/ever-accepted/`
    const response = await get(url)

    return response.data
  }

export const adminQuestAccept = async (questId) =>
  {
    const url = `${defaultAPIURL}/quests-admin/accept/${questId}/`
    const response = await patch(url)

    return response
  }

  export const adminQuestReject = async (questId) =>
  {
    const url = `${defaultAPIURL}/quests-admin/reject/${questId}/`
    const response = await patch(url)

    return response
  }