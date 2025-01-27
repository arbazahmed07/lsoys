const express = require('express');
const User = require("../models/User");
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware to authenticate token
// const authMiddleware = (req, res, next) => {
//   const token = req.header('x-auth-token');
//   if (!token) {
//     return res.status(401).json({ msg: 'No token, authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded.user;
//     next();
//   } catch (err) {
//     res.status(401).json({ msg: 'Token is not valid' });
//   }
// };

// Get user profile
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update user profile
router.put('/:id', async (req, res) => {
  try {
    const { name, bio, gender, location } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, bio, gender, location },
      { new: true }
    );
    res.json(updatedUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
