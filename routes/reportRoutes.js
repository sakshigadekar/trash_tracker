const express = require('express');
const router = express.Router();
const Report = require('../models/Report');
const multer = require('multer');
const sharp = require('sharp');

// Set up Multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route for reporting a site with images
router.post('/', upload.array('photos', 5), async (req, res) => {
    try {
        console.log("here")
        // Extract data from the request
        const { location, description } = req.body;

        // Create a new report instance
        const newReport = new Report({
            location,
            description,
            photos: [],
        });

        // Process and store image files in the database
        const processedPhotos = [];

        for (const photo of req.files) {
            // Compress and resize the image using sharp
            const resizedImage = await sharp(photo.buffer)
                .resize({ width: 800 }) // Adjust the width as needed
                .jpeg({ quality: 80 }) // Adjust the quality as needed (for JPEG)
                .toBuffer();

            // Add the processed image to the report
            processedPhotos.push({
                data: resizedImage,
                contentType: photo.mimetype,
            });
        }

        // Assign processed photos to the new report
        newReport.photos = processedPhotos;

        // Save the report with processed images to the database
        await newReport.save();

        res.json({ message: 'Report submitted successfully' });
    } catch (error) {
        console.error('Error reporting site:', error);
        res.status(500).json({ error: 'An error occurred while reporting the site' });
    }
});

module.exports = router;

