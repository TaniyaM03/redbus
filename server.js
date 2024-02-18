const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(cors());
app.use(bodyParser.json());

// POST endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Save form data to a JSON file
    saveFormData(formData);

    // Respond with a success message
    res.json({ success: true, message: 'Form data saved successfully' });
});

// Function to save form data to a JSON file
function saveFormData(formData) {
    const dataFilePath = 'form_data.json';

    // Read existing data or initialize an empty array
    let existingData = [];
    try {
        existingData = JSON.parse(fs.readFileSync(dataFilePath));
    } catch (error) {
      
    }
    existingData.push(formData);
    fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
