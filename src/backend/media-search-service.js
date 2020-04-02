// import dotenv from "dotenv";
// import axios from "axios";
// dotenv.config();
// Import using CommonJS syntax
require("dotenv").config();
const axios = require("axios");
const basicAuth = `${process.env.SS_ID}:${process.env.SS_SECRET}`;

// Base64 encode client ID and client secret for use in the authorization header
const encodeAuthorization = `Basic ${Buffer.from(basicAuth).toString(
  "base64"
)}`;

// Axios client decclaration
const api = axios.create({
  baseURL: "https://api.shutterstock.com/v2",
  timeout: 5000,
  headers: {
    Authorization: encodeAuthorization
  }
});

// Generic GET request function
const getRequest = async (url, params) => {
  try {
    const res = await api.get(
      url,
      { params }
      // {
      // params: {
      //   query: input
      // }
      // }
    );
    const { data } = res;
    console.log(res);
    return data;
  } catch (err) {
    console.log(err);
  }
};

// Export the function that fetches media results from Shutterstock
// export default getMediaFromSS = input =>
//   getRequest("/images/search", {
//     params: {
//       query: input
//     }
//   });

// Export for Node.js
module.exports = {
  // getMediaFromSS: input =>
  //   getRequest("/images/search", {
  //     params: {
  //       query: input
  //     }
  //   })
  getMediaFromSS: paramObj => getRequest("/images/search", paramObj)
};
