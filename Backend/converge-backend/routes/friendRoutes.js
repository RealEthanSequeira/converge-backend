const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /api/friends/add - Add a friend (both users must exist)
router.post('/add', async (req, res) => {
  try {
    const { userId, friendId } = req.body;

    if (userId === friendId) {
      return res.status(400).json({ message: "You can't add yourself as a friend" });
    }

    const user = await User.findById(userId);
    const friend = await User.findById(friendId);

    if (!user || !friend) {
      return res.status(404).json({ message: "User or friend not found" });
    }

    if (user.friends.includes(friendId)) {
      return res.status(400).json({ message: "Already friends" });
    }

    user.friends.push(friendId);
    friend.friends.push(userId);

    await user.save();
    await friend.save();

    res.status(200).json({ message: "Friend added successfully" });
  } catch (err) {
    console.error("Friend add error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/friends/:userId - Get friends of a user
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('friends', 'name email');
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user.friends);
  } catch (err) {
    console.error("Friend fetch error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
