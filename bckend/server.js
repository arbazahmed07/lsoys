const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const profile=require("./routes/ProfileRoutes")
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes

app.use('/api/users', userRoutes);
app.use('/api/profile', profile);

// Start server
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
