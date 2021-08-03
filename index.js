const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const crypto = require('crypto');
const nonce = require('nonce');
const querystring = require('querystring');
const request = require('request');

const apikey = process.env.SHOPIFY_APIKEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;
const scopes = 'write_product';
const forwardingAddress = 'https://3881c7953282.ngrok.io';

app.get('/shopify', (req, res) => {
  const shop = req.query.shop;
  if (shop) {
    const state = nonce();
    const redirectUrl = forwardingAddress + '/shopify/callback';
    const installUrl =
      'https://' +
      shop +
      '/admin/oauth/authorize?client_id=' +
      apikey +
      '&scope=' +
      scopes +
      '&state' +
      state +
      '&redirectUri=' +
      redirectUrl;

      res.cookie('state',state)
      res.redirect(installUrl);
  } else {
    return res.status(400).send('missing shop parameter');
  }
});

app.get('/', (req, res) => {
  res.send('hello World');
});

app.listen(3000, () => {
  console.log('running');
});
