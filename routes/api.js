const express = require('express');
const router = express.Router();
const Report = require('../models/Report');
const path = require('path'); // Assuming you have a Report model

// Route to get all reports
router.get('/reports', async (req, res) => {
    try {
        const reports = await Report.find();
        res.json(reports);
    } catch (error) {
        console.error('Error fetching reports:', error);
        res.status(500).json({ error: 'An error occurred while fetching reports' });
    }
});

// Route to create a new report
router.post('/reports', async (req, res) => {
    try {
        const { location, description, photos } = req.body;
        
        // Create a new report instance
        const newReport = new Report({
            location,
            description,
            photos,
        });

        // Save the report to the database
        await newReport.save();

        res.json({ message: 'Report submitted successfully' });
    } catch (error) {
        console.error('Error submitting report:', error);
        res.status(500).json({ error: 'An error occurred while submitting the report' });
    }
});
router.get('/trash', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'roboflow.html'));
});
module.exports = router;
