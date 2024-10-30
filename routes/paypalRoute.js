// server.js or routes/paypalRoutes.js
const express = require('express');
const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');
const router = express.Router();
const { client } = require('../paypalClient');

router.post('/create-payment', async (req, res) => {
  const request = new checkoutNodeJssdk.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        value: '300.00', // Set your amount here
      }
    }],
    application_context: {
      return_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    }
  });

  try {
    const order = await client().execute(request);
    res.json({
      id: order.result.id,  // Send order ID to frontend
      links: order.result.links,  // Links include the approval link
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});



// server.js or routes/paypalRoutes.js
router.post('/capture-payment', async (req, res) => {
    const { orderID } = req.body;  // Get the order ID from frontend
  
    const request = new checkoutNodeJssdk.orders.OrdersCaptureRequest(orderID);
    request.requestBody({});
  
    try {
      const capture = await client().execute(request);
      res.json({
        status: capture.result.status,
        id: capture.result.id,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  });
  
  module.exports = router;