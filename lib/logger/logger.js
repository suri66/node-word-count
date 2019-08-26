const log4js = require('log4js');
log4js.configure({
  appenders: { wordCount: { type: 'file', filename: 'logs/wordCount.log', maxLogSize: 100000 } },
  categories: { default: { appenders: ['wordCount'], level: 'info' } }
});
const logger = log4js.getLogger('wordCount');


module.exports = logger
