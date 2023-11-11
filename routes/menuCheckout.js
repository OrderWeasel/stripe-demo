const express = require('express');
const router = express.Router();

// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_51O8jOmJgeRexywlkyOJuUcIfwQUtSWPwUCauVT4nUKOVwNkHj0ZkrKqEssNAsU1eUBn33cGczqK06xetzNx04ncN00EeGgY6jW');

const getCheckoutSessionObj = async function() {
  const session = await stripe.checkout.sessions.create(
    {
      mode: 'payment',
      line_items: [
        {
          price: 'price_1O9GQLR1XJQWFP84ut0mlleG',
          quantity: 1,
        },
      ],
      payment_intent_data: {
        application_fee_amount: 123,
      },
      success_url: 'http://localhost:3000/',
      cancel_url: 'http://localhost:3000/error',
    },
    {
      stripeAccount: 'acct_1O8ysZR1XJQWFP84',
    }
  );
  return session;
}



router.get('/', async (req, res, next) => {
  const checkoutSessionObj = await getCheckoutSessionObj();
  console.log(checkoutSessionObj);
  res.render('menuCheckout', { url: String(checkoutSessionObj.url) });
});

module.exports = router;