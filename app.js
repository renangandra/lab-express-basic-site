const express = require('express');
const app = express();
const port = 3000; // You can choose your desired port number


// Serve static files from the public directory
app.use(express.static('public'));

// Define routes for each page
app.get('/', (request, response) => {
    console.log(request);
    ("lab-express-basic-site/views/home.html");
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response) => {
    res.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (req, res) => {
    res.sendFile(__dirname + '/views/works.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});