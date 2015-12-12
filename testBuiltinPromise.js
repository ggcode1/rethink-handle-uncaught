'use strict';

const options = require('./database.json');
const r = require('rethinkdbdash')(options);

require('./index')(r);

// tests with node's built-in "Promise". Should still get logged.

Promise.reject(new TypeError('rethink-handle-uncaught promise test '));

throw new Error('rethink-handle-uncaught exception test ')
