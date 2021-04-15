const { defaultAPIURL } = require("../config")
const { post, patch, get, patchWithBody } = require("./helper")

export const createDuelProof = async (data) =>
{
  const url = `${defaultAPIURL}/duel-proofs/`
  const response = await post(url, data)

  return response
}

export const adminDuelProofAccept = async (duelproofId) =>
{
  const url = `${defaultAPIURL}/duel-proofs-admin/accept/${duelproofId}/`
  const response = await patch(url)

  return response
}

export const adminDuelProofReject = async (duelproofId, data) =>
{
  const url = `${defaultAPIURL}/duel-proofs-admin/reject/${duelproofId}/`
  const response = await patchWithBody(url, data)

  return response
}

export const getDuelProofList = async (status) =>
{
  const url = `${defaultAPIURL}/duel-proofs/${status}/`
  const response = await get(url)

  return response
}