const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({route: "players"});

});

module.exports = router;