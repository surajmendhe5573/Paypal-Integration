const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');
require('dotenv').config(); // Load environment variables from .env file

function environment() {
    let clientId = process.env.PAYPAL_CLIENT_ID; // Use environment variable
    let clientSecret = process.env.PAYPAL_CLIENT_SECRET; // Use environment variable

    return new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
    // Use checkoutNodeJssdk.core.LiveEnvironment for production
}

function client() {
    return new checkoutNodeJssdk.core.PayPalHttpClient(environment());
}

module.exports = { client };
