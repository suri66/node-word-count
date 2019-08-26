/**
 * @name wordCount
 * @author Surjeet Bhadauirya <sbsurjeet66@gmail.com>
 * @description wordCount model
 * @version 0.0.0
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WordCount = new Schema({
    word: String,
    count: Number
});

module.exports = mongoose.model('WordCount', WordCount);