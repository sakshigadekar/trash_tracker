const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();
const cors = require('cors');

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// API routes
app.use('/api', require('./routes/api'));

// Serve static assets (React app) in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req,res)=>{
console.log("In app.get in server.js");
res.send("This is the backend of DumpBuster and it is UP and RUNNNING...");
})

const reportRoutes = require('./routes/reportRoutes');
app.use('/reportRoutes', reportRoutes);

app.get('/trash', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'roboflow.html'));
});

