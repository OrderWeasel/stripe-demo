const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_51O8jOmJgeRexywlkyOJuUcIfwQUtSWPwUCauVT4nUKOVwNkHj0ZkrKqEssNAsU1eUBn33cGczqK06xetzNx04ncN00EeGgY6jW');

const getAccountLinkObj = async function(accountId) {
  const accountLinkObj = await stripe.accountLinks.create({
    account: accountId,
    refresh_url: 'http://localhost:3000/stripeMerchantSignUp',
    return_url: 'http://localhost:3000/stripeMerchantSignUp',
    type: 'account_onboarding',
  });

  return accountLinkObj;
}

const getAccountObj = async function() {
  const account = await stripe.accounts.create({
    type: 'standard',
    country: 'US',
    email: 'dwayne.johnson@example.com',
    business_type: 'company',
    company: {
      name: 'Poke and the Rock'
    },
  });

  return account;
}

router.get('/', async function(req, res, next) {
  const account = await getAccountObj();
  const accountLinkObj = await getAccountLinkObj(account.id);
  res.render('stripeMerchantSignUp', {accountLinkObj: JSON.stringify(accountLinkObj)});
});

module.exports = router;