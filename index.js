const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware to handle JSON and enable CORS
app.use(express.json());
app.use(cors());

// Simple in-memory storage for QC panels (temporary solution)
const qcPanels = [];

// Test route to check if backend is working
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// Route to handle QC Panel data submission
app.post('/api/qc-panel', (req, res) => {
  const { panelName, description } = req.body;

  // Validate that both panelName and description are provided
  if (panelName && description) {
    const newPanel = { id: qcPanels.length + 1, panelName, description };
    qcPanels.push(newPanel);
    console.log('QC Panel created successfully:', newPanel);
    res.status(201).json({ message: 'QC Panel created successfully', panel: newPanel });
  } else {
    res.status(400).json({ error: 'Missing panel name or description' });
  }
});

// Route to get all QC Panels
app.get('/api/qc-panel', (req, res) => {
  res.status(200).json(qcPanels);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
