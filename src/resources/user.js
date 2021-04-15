import { get } from "./helper";

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

      const httpStatus = response.status
      const res = JSON.parse(JSON.stringify(response.json()))
      res.httpStatus = httpStatus

      resolve(res);
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

export const listKandidatDukungan = async () =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/list-kandidat-dukungan/`, {
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

export const dukungKandidat = (kandidatId) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${defaultAPIURL}/dukungan-massa/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          kandidat: kandidatId
        })
      })
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });

export const listKandidatK3M = async () =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/list-kandidat-k3m/`, {
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

export const listKandidatMWAWM = async () =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/list-kandidat-mwawm/`, {
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

export const associateUser = async (data) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/associate-massa-lembaga/`, {
        method: 'PATCH',
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

      resolve(res);
    } catch (e) {
      reject(e);
    }
  });

export const disassociateUser = async (data) =>
  new Promise(async (resolve, reject) => {    
    try {
      const token = localStorage.getItem('token')
      let response = await fetch(`${defaultAPIURL}/disassociate-massa-lembaga/`, {
        method: 'PATCH',
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

      resolve(res);
    } catch (e) {
      reject(e);
    }
  });

export const topLembaga = async (num) => 
{
  const url = `${defaultAPIURL}/top-lembaga/${num}/`
  const response = await get(url)
  
  return response
}

export const listAllKandidat = async () => 
{
  const url = `${defaultAPIURL}/list-all-kandidat/`
  const response = await get(url)
  
  return response
}