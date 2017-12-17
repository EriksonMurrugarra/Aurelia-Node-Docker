const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

// middle-wares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes
const groupsRoutes = require('./src/routes/groups-route');
const matchesRoutes = require('./src/routes/matches');
const teamsRoutes = require('./src/routes/teams');
const playersRoutes = require('./src/routes/players');

app.use('/groups', groupsRoutes);
app.use('/matches', matchesRoutes);
app.use('/teams', teamsRoutes);
app.use('/players', playersRoutes);

app.listen(3000, () => {
    console.log('running on port: 3000');
});