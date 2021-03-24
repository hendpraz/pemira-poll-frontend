const { defaultAPIURL } = require("../config")
const { post, patch, get, patchWithBody } = require("./helper")

export const buyItem = async (itemId) =>
{
  const url = `${defaultAPIURL}/item-buy/${itemId}/`
  const response = await patch(url)

  return response
}

export const listItems = async () => 
{
  const url = `${defaultAPIURL}/items-list/`
  const response = await get(url)
  
  return response
}

export const myItems = async () => 
{
  const url = `${defaultAPIURL}/items/my/`
  const response = await get(url)
  
  return response
}

// For Admin
export const createItem = async (data) => 
{
  const url = `${defaultAPIURL}/items/`
  const response = await post(url, data)
  
  return response
}

export const deleteItem = async (itemId) => 
{
  const url = `${defaultAPIURL}/item-delete/${itemId}/`
  const response = await post(url)
  
  return response
}