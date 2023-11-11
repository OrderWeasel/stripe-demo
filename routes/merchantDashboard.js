const express = require('express');
const router = express.Router();

const base64 = require('base-64');

const credentials = `${base64.encode(`${'AWEf910DhwYkQHxIF8kOla0XFDcU-vf_eCnWYqGQaQqudCM8X6zyFfQIOtZ1_CdWLLvFzqRkABRuTyjL'}:${'ENyNQpzxXYq3Z1PUp7dZZGaUGFeEfk0HMotnr0gU4L4tFkAnSdryfpsGrXzoEMPImziQ55j9WMrRvQr1'}`)}`;

router.get('/', (req, res, next) => {
  res.render('merchantDashboard', { credentials });
});

module.exports = router;