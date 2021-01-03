const axios = require("axios");
const { defaultAPIURL } = require("../config");

const validateStatus = () => true;
axios.defaults.withCredentials = true;
const withCredentials = true;

exports.getAuthCheck = (token) =>
  new Promise(async (resolve, reject) => {
    try {
      axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

      const url = `${defaultAPIURL}/my-profile/`;
      const { data: response } = await axios({
        url,
        method: "post",
        validateStatus,
        withCredentials,
      });
      resolve(response);
    } catch (e) {
      reject(e);
    }
  });