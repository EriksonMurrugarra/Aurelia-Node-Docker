const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({route: "matches"});

});

module.exports = router;