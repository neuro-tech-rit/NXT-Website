const express = require('express');
const router = express.Router();

/* GET temp listing. */
router.get('/', (req, res, next) => {
  res.send('Temp Response');
});

module.exports = router;
