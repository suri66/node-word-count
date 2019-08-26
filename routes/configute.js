/**
 * @name index
 * @author Surjeet Bhadauirya <sbsurjeet66@gmail.com>
 * @description configure all routes
 * @version 0.0.0
 */

'use strict'

const index = require('./index');
const wordCount = require('./wordCount');

function configure(app) {
  app.use('/', index);
  app.use('/wordCount', wordCount);
}

module.exports = {
  configure: configure
}
