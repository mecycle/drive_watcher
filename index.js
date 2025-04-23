const express = require('express');
const app = express();
app.use(express.json());

app.post('/notifications', (req, res) => {
    console.log('Received notification:', req.body);
    
    // Verify this is a valid notification
    const channelId = req.headers['x-goog-channel-id'];
    const resourceId = req.headers['x-goog-resource-id'];
    const resourceState = req.headers['x-goog-resource-state'];
    const messageNumber = req.headers['x-goog-message-number'];
  
    console.log('Notification details:', {
      channelId,
      resourceId,
      resourceState,
      messageNumber,
    });
  
    // Acknowledge receipt of the notification
    res.status(200).send();
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
