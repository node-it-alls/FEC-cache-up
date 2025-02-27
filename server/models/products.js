const axios = require('axios');
require('dotenv').config();

// To use this API, you must create a GitHub API Token
module.exports = {
  fetchAll: (page, count) => {
    return axios.get(
      `${process.env.API_URL}products?page=${page}&count=${count}`,
      {
        headers: {
          Authorization: process.env.GITHUB_TOKEN,
        },
      },
    );
  },
  fetchProductInformation: (id) => {
    return axios.get(`${process.env.API_URL}products/${id}`, {
      headers: {
        Authorization: process.env.GITHUB_TOKEN,
      },
    });
  },
  fetchProductStyles: (id) => {
    return axios.get(`${process.env.API_URL}products/${id}/styles`, {
      headers: {
        Authorization: process.env.GITHUB_TOKEN,
      },
    });
  },
  fetchRelatedProducts: (id) => {
    return axios.get(`${process.env.API_URL}products/${id}/related`, {
      headers: {
        Authorization: process.env.GITHUB_TOKEN,
      },
    });
  },
};
