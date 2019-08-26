/**
 * @name util
 * @author Surjeet Bhadauirya <sbsurjeet66@gmail.com>
 * @description utility functions
 * @version 0.0.0
 */

"use strict";

const middleware = require('../lib/middleware/middleware');
const WordCountModel = require('../lib/model/wordcount');

/**
 * @name countWords
 * @description countWords function
 * @param {string} text - string param
 * @param {function} cb - callback function
 */
function countWords(text, cb) {
  const words = text
    .replace(/[.,?!;()"'-]/g, " ")
    .replace(/\s+/g, " ")
    .split(" ") || [];
  process(words, (err, data) => {
    if (err) {
      console.log(err);
      return cb(err, null); // something went wrong
    }

    cb(null, data); // success.. all entries proceed 
  });
}


/**
* @name process
* @description process function
* @param {array} words - array param
* @param {function} cb - callback function
*/
async function process(words, cb) { // recursive function

  if (!words.length) {
    return cb(null, 'All entries successfully procced.');
  }

  let word = words.shift();
  word = word.trim();

  const query = {
    'word': word
  };

  let count = await middleware.getCount(WordCountModel, query);

  if (count) {
    // update count of already saved word
    await middleware.update(WordCountModel, query, { $inc: { count: 1 } });
  } else {
    // insert word
    await middleware.create(WordCountModel, { 'word': word, 'count': 1 });
  }

  process(words, cb); // calling function again for next word
}

module.exports = {
  countWords: countWords
};

