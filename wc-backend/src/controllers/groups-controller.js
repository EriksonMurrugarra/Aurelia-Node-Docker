const groupService = require('../services/groups-service');
const Group = require('../models/group');

exports.retrieveGroups = (req, res) => {
    // res.json({route: groupService.getGroups() });
    let group = new Group();
    group.name = 'erikson';
    res.json(group);
}

exports.createGroup = (req, res) => {
    res.json(req.body);
}