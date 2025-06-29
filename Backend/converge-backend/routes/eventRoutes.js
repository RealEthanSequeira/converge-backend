const express = require('express');
const Event = require('../models/Event');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { userId, title, date, time, location, notes } = req.body;
    const newEvent = new Event({ userId, title, date, time, location, notes });
    await newEvent.save();
    res.status(201).json({ message: 'Event created', event: newEvent });
  } catch (err) {
    console.error('Event creation error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

router.get('/:userId', async (req, res) => {
  try {
    const events = await Event.find({ userId: req.params.userId });
    res.status(200).json(events);
  } catch (err) {
    console.error('Event fetch error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:eventId', async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.eventId,
      req.body,
      { new: true }
    );
    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json({ message: 'Event updated', event: updatedEvent });
  } catch (err) {
    console.error('Event update error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:eventId', async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.eventId);
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json({ message: 'Event deleted' });
  } catch (err) {
    console.error('Event delete error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
