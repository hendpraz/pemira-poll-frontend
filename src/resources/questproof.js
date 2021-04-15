const { defaultAPIURL } = require("../config")
const { post, patch, get, patchWithBody } = require("./helper")

export const createQuestProof = async (data) =>
{
  const url = `${defaultAPIURL}/quest-proofs/`
  const response = await post(url, data)

  return response
}

export const adminQuestProofAccept = async (questproofId) =>
{
  const url = `${defaultAPIURL}/quest-proofs-admin/accept/${questproofId}/`
  const response = await patch(url)

  return response
}

export const adminQuestProofReject = async (questproofId, data) =>
{
  const url = `${defaultAPIURL}/quest-proofs-admin/reject/${questproofId}/`
  const response = await patchWithBody(url, data)

  return response
}

export const getQuestProofList = async (status) =>
{
  const url = `${defaultAPIURL}/quest-proofs/${status}/`
  const response = await get(url)

  return response
}