const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema(
  {
   
    location: {
      type: String,
      required: true,
    },
    travelDate: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Profile', ProfileSchema);
