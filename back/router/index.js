const express = require('express');
const router = express.Router();

router.use('/api',require('./controllers/series.js'));
module.exports = router;