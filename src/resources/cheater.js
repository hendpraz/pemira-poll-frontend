const { defaultAPIURL } = require("../config")
const { post, patch, get, patchWithBody } = require("./helper")

export const createCase = async (data) => 
{
  const url = `${defaultAPIURL}/cases/`
  const response = await post(url, data)
  
  return response
}

export const listAllCases = async () => 
{
  const url = `${defaultAPIURL}/cases/all/`
  const response = await get(url)
  
  return response
}

export const listMyCases = async () => 
{
  const url = `${defaultAPIURL}/cases/my/`
  const response = await get(url)
  
  return response
}

// Admin
export const approveCase = async (caseId) => 
{
  const url = `${defaultAPIURL}/cases/approve/${caseId}`
  const response = await patch(url)
  
  return response
}

export const rejectCase = async (caseId) => 
{
  const url = `${defaultAPIURL}/cases/reject/${caseId}`
  const response = await patch(url)
  
  return response
}