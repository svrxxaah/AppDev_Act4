const express = require('express');
const router = express.Router();
const controller = require('../controllers/itemController');

router.get('/', controller.homepage);
router.get('/about', controller.about);
router.get('/contact', controller.contact);
router.get('/gallery', controller.gallery);
router.get('/profile/:username', controller.profile);

module.exports = router;