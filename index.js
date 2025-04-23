const express = require('express');
const app = express();
app.use(express.json());

app.post('/notifications', (req, res) => {
  console.log('🔔 Webhook received:', req.headers, req.body);
  res.status(200).send('OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
