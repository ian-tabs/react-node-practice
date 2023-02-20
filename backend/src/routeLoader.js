const fs = require('fs');
const path = require('path');

function loadRoutes(app, routesDir) {
    try {
        // get an array of files in the routes directory
        const routeFiles = fs.readdirSync(routesDir);

        // iterate through the array and create a route for each file
        routeFiles.forEach((routeFile) => {
            // extract the name of the route from the file name
            const routeEndpoint = routeFile.replace('.js', '');
            // require the route file
            const route = require(path.join(routesDir, routeFile));
            // create a route for the file
            app.use(`/api/${routeEndpoint}`, route);
        });
    } catch (err) {
        // log an error message if there is an error reading the files
        console.error(`Error loading routes from ${routesDir}: ${err.message}`);
    }
}

module.exports = loadRoutes;

