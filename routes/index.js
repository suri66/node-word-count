/**
 * @name index.js
 * @author Surjeet Bhadauriya <sbsurjeet66@gmail.com>
 * @description index route
 * @version 0.0.0
 */

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Word Count API' });
});

module.exports = router;
