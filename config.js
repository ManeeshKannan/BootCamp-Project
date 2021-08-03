const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  API_KEY,
  ATHU_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APD_ID,
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
  port: PORT,
  host: HOST,
  url:HOST_URL,
  firebaseConfig : {
    apiKey:API_KEY,
    authDomain: ATHU_DOMAIN,
    databaseURL:DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket:   STORAGE_BUCKET,
    messagingSenderId:MESSAGING_SENDER_ID,
    appId: APD_ID,
    measurementId: "G-YGFVL2VGK5"
  }
};
