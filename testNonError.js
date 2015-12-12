'use strict';

const Promise = require('bluebird');
const options = require('./database.json');
const r = require('rethinkdbdash')(options);

require('./index')(r);

throw 'hi'
