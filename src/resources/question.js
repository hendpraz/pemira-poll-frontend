const { defaultAPIURL } = require("../config");
const { get, patch, post } = require("./helper")

// Admin
export const getAllQuestions = async () =>
  {
    const url = `${defaultAPIURL}/questions/all/`
    const response = await get(url)

    return response
  }

export const getAllAnswers = async () =>
  {
    const url = `${defaultAPIURL}/answers/all/`
    const response = await get(url)

    return response
  }

export const createQuestion = async (data) =>
  {
    const url = `${defaultAPIURL}/questions/`
    const response = await post(url, data)

    return response
  }

// Users
export const getAvailableQuestions = async () =>
  {
    const url = `${defaultAPIURL}/questions/available/`
    const response = await get(url)

    return response
  }

export const getHistoryQuestions = async () =>
  {
    const url = `${defaultAPIURL}/questions/history/`
    const response = await get(url)

    return response
  }

export const getMyAnswers = async () =>
  {
    const url = `${defaultAPIURL}/answers/my/`
    const response = await get(url)

    return response
  }