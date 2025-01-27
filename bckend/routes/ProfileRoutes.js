const express = require('express');
const Profile = require('../models/Profile');
const router = express.Router();

// Create or update user profile
router.post('/pro', async (req, res) => {
  console.log("first")
  const { location, travelDate, gender } = req.body;
console.log("hello")
  // Input validation
  if (!location || !travelDate || !gender) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  // Validate gender
  const validGenders = ['Male', 'Female', 'Other'];
  if (!validGenders.includes(gender)) {
    return res.status(400).json({ msg: 'Invalid gender' });
  }

  // Validate travelDate (ensure it's a valid date)
  if (isNaN(new Date(travelDate).getTime())) {
    return res.status(400).json({ msg: 'Invalid travel date' });
  }

  try {

    const profile = new Profile({

      location,
      travelDate,
      gender,
    });

    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all profiles
router.get('/', async (req, res) => {
  try {
    console.log("haaaaaaaa")
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


// Get filtered profiles based on location, travelDate, and gender
router.get('/users', async (req, res) => {
  const { location, travelDate } = req.query;

  let query = {};

  // Check location first
  if (location) {
    query.location = { $regex: location, $options: 'i' }; 
  }

  // Check travelDate separately
  if (travelDate) {
    query.travelDate = { $gte: new Date(travelDate) }; 
  }

  // console.log('Built Query:', query);

  try {
    const profiles = await Profile.find(query);
    console.log('Found Profiles:', profiles);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});



module.exports = router;
