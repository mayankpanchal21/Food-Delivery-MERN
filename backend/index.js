const dotenv = require('dotenv');
dotenv.config();  // Load environment variables

console.log(process.env.PORT);  // Log the PORT value to check if it's loaded correctly

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
