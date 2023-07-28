/**
 * @name index.js
 * @author Surjeet Bhadauriya <sbsurjeet66@gmail.com>
 * @description wordCount route
 * @version 0.0.0
 */

const express = require('express');
const router = express.Router();
const WordCountModel = require('../lib/model/wordcount');
const middleware = require('../lib/middleware/middleware');
const utils = require('../lib/utils');

router.get('/', async function (req, res, next) {
    try {
        console.log('test log');
        console.log('test log');
        console.log('test log');
        console.log('test log');
        console.log('test log');
        let qData = await middleware.getAll(WordCountModel, {});        
        res.send({ data: qData, status: 'Success' });
    } catch (error) {
        res.status(409).send({ err: error, status: 'Failure' });
    }
});

router.post('/', function (req, res, next) {
    try {
        let text = req.body.content || '';
        utils.countWords(text, (err, data) => {
            if (err) {
                throw new Error(err);
            }
            res.send({ data: 'All entries saved successfully', status: 'Success' });
        });
    } catch (error) {
        res.status(409).send({ err: error, status: 'Failure' });
    }
});

module.exports = router;
