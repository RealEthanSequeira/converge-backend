const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load .env variables early
dotenv.config();
console.log('MONGO_URI:', process.env.MONGO_URI);

console.log('Mongo URI from env:', process.env.MONGO_URI); // Debug: print Mongo URI

const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const friendRoutes = require('./routes/friendRoutes'); // Make sure file name matches exactly

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/friends', friendRoutes);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error('❌ MongoDB connection failed:', error.message);
  });
