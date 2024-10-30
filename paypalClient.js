// paypalClient.js
const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');

function environment() {
  let clientId = "AZYYxazJc8e7bJJi6R-jGn9654xw0zYutug3iUDZIzTKWmFEmcnkScFLW_abJari8extxdMWuOjJlS6i";
  let clientSecret = "EKeNzB-mE2aSSyuQQpzcSVhR4RMdTUNetYyAeqPS5CgHXpXZ-UfQPXHx48AnuPtqRaqE-qPkcbeIPdcz";
  
  return new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
  // Use checkoutNodeJssdk.core.LiveEnvironment for production
}

function client() {
  return new checkoutNodeJssdk.core.PayPalHttpClient(environment());
}

module.exports = { client };
