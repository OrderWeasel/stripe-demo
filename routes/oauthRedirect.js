const express = require('express');
const router = express.Router();

// OrderWeasel Square Sandbox Application ID = 'sandbox-sq0idb-7eLHu6HJWhA_tWlfYSVxXA'
// OrderWeasel Square Sandbox Application Secret = 'sandbox-sq0csb-D2ld_a1psxQ7a2onFk4yoyfhKWszep-L3SbnafAS8_E'

// the URL returns the `code` parameter which is the `authorization code`. Use this value when you call ObtainToken
// to get the seller's OAuth access token and refresh token for the seller account. The value you proivde to the ObtainToken call
// must match this value exactly. If you're using the PKCE flow, you must also include the `code_verifier` in the request to `ObtainToken`

// Note: The `authorization code` expires 5 minutes after the Square authorization page generates the code.
//       If the code expires before you get an access token, the seller must go to the Square authorization page again to create another authorization code.
//       The request format to call `ObtainToken` differ between the code flow and the PKCE flow.

router.get('/', (req, res) => {
  console.log(req.body);
  console.log(req.url);
  const paramString = req.url.split('?')[1];
  const nameValuePairs = paramString.split('&');
  const code = nameValuePairs[0].split('=')[1];
  console.log(code);
  const client_id = 'sandbox-sq0idb-7eLHu6HJWhA_tWlfYSVxXA';
  console.log('WHOOOOOOO HOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!');
  res.render('squareIntegrationSuccess', {client_id, code});
});

router.post('/', async (req, res) => {
  console.log(req.body);
  const code_verifier = req.body.code_verifier;
  const code = req.body.code;
  const client_id = 'sandbox-sq0idb-uvSS-ef1c6SEh4JePdXH1w';
  const redirect_uri = 'http://localhost:3000/oauth-redirect';
  const grant_type = 'authorization_code';
  //console.log(code_verifier, code, client_id, redirect_uri, grant_type);

  try {
    const response = await fetch('https://connect.squareupsandbox.com/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code_verifier, code, client_id, redirect_uri, grant_type
      })
    });

    const result = await response.json();
    if (response.ok) {
      console.log(result);
    } else {
      throw Error(result.message);
    }

  } catch (error) {
    console.log(error);
  }
});

module.exports =  router;