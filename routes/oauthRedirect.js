const express = require('express');
const router = express.Router();

// OrderWeasel Square Sandbox Application ID = 'sandbox-sq0idb-7eLHu6HJWhA_tWlfYSVxXA'
// OrderWeasel Square Sandbox Application Secret = 'sandbox-sq0csb-D2ld_a1psxQ7a2onFk4yoyfhKWszep-L3SbnafAS8_E'

router.get('/', (req, res) => {
  res.json( {msg : 'Hello World'} );
});

module.exports =  router;