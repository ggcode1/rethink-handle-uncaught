'use strict';

const Promise = require('bluebird');
const options = require('./database.json');
const r = require('rethinkdbdash')(options);

require('./index')(r);

Promise.reject(new TypeError('rethink-handle-uncaught promise test '));

throw new Error('rethink-handle-uncaught exception test ')
