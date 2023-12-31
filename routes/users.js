var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  const userId = req.params.id;
  res.render('userPage', {userId} );
})

module.exports = router;
