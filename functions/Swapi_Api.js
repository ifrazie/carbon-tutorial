import fetch from 'node-fetch';

const API_ENDPOINT = 'https://swapi.co/api/people/5/';

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT, { headers: { Accept: 'application/json' } })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data,
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
