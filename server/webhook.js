// server/webhook.js
const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_51PY8KTRsGojz0TAj7mtfLumk1ve5WCrzUyKClA2n2DUVITOHpXQ9UtoTP6zSHSLPpcqJhh0GkLsExyZJOJ1n4QUd00wsq7hyzk');
const endpointSecret = 'your-webhook-signing-secret';

const app = express();

app.use(bodyParser.raw({ type: 'application/json' }));

app.post('/webhook', (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.log(`⚠️  Webhook signature verification failed.`, err.message);
    return res.sendStatus(400);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
      // Perform actions based on the event
      break;
    // Other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  res.send();
});

app.listen(3001, () => console.log('Running on port 3000'));
