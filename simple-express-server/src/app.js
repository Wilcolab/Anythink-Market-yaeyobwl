const express = require('express');

const app = express();
const PORT = 8001;

// ✅ ADD THIS ROUTE
app.get('/tasks', (req, res) => {
  res.json({
    tasks: [
      "Write a diary entry from the future",
      "Create a time machine from a cardboard box",
      "Plan a trip to the dinosaurs",
      "Draw a futuristic city",
      "List items to bring on a time-travel adventure"
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
