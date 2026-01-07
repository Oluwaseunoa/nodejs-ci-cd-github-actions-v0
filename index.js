const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GitHub Actions CI/CD Project Running');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});