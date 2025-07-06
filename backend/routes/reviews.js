const express = require('express');
const Review = require('../models/Review');
const router = express.Router();

// GET /api/tourguide-reviews?guide=Guide Name
router.get('/', async (req, res) => {
  try {
    const filter = {};
    if (req.query.guide) filter.guide = req.query.guide;
    const reviews = await Review.find(filter).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/tourguide-reviews/stars?guide=Guide Name
router.get('/stars', async (req, res) => {
  try {
    const filter = {};
    if (req.query.guide) filter.guide = req.query.guide;
    // Only return stars array
    const stars = await Review.find(filter).select('stars -_id');
    res.json(stars.map(r => r.stars));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/tourguide-reviews/comments?guide=Guide Name
router.get('/comments', async (req, res) => {
  try {
    const filter = {};
    if (req.query.guide) filter.guide = req.query.guide;
    // Only return reviews with non-empty comment
    const reviews = await Review.find({ ...filter, comment: { $exists: true, $ne: "" } }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/tourguide-reviews
router.post('/', async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
