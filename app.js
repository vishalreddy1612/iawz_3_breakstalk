const express = require('express');
const app = express();
const port = 8080;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World! This is a Node.js app deployed on AWS Elastic Beanstalk!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});