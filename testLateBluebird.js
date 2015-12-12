'use strict';

const options = require('./database.json');
const r = require('rethinkdbdash')(options);

require('./index')(r);

// tests with loading bluebird after registering the promise handler. Should still get logged.
const Promise = require('bluebird');

Promise.reject(new TypeError('rethink-handle-uncaught promise test '));

throw new Error('rethink-handle-uncaught exception test ')
