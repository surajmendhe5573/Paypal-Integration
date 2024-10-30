// server.js
const express = require('express');
const app = express();
const paypalRoutes = require('./routes/paypalRoute');

app.use(express.json());
app.use('/paypal', paypalRoutes);

// Define the success route
app.get('/success', (req, res) => {
    res.send("Payment successful! Thank you for your purchase.");
});

app.get('/cancel', (req, res) => {
    res.send("cancel payment");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
