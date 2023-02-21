// import node modules
const express = require('express');
const cors = require('cors');
const path = require('path');

// create express instance
const app = express();

// Use middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// define directory where the routes are located
const routesDir = path.join(__dirname, 'routes');

// load the routes from the specified directory
const loadRoutes = require('./utils/routeLoader');
loadRoutes(app, routesDir);

// error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// define port
const port = process.env.PORT || 3001; // Use the PORT environment variable if set, otherwise default to 3001

// start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});