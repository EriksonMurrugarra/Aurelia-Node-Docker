const express = require('express');
const router = express.Router();
const groupsController = require('../controllers/groups-controller');

router
  .route('/')
    .get(groupsController.retrieveGroups)
    .post(groupsController.createGroup);


module.exports = router;