// require('dotenv').config();
const app = require('./app');

// const port = process.env.GRAPHQL_SERVICE_PORT || 3100;
const port = 3100;

app.listen({port}).then(({url}) => {
    console.log(`Graphql server is running at url ${url}`);
    
})