const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();
const PORT = process.env.PORT || 5000;

let totalVisitors = 0;

// Use cors middleware to enable CORS
app.use(cors());

app.get('/api/total-visitors', (req, res) => {
  res.json({ totalVisitors });
});

app.get('/api/increment-visitor', (req, res) => {
  totalVisitors += 1;
  res.json({ success: true, totalVisitors });
});

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});