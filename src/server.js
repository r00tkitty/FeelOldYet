// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define a route handler for the root URL
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
