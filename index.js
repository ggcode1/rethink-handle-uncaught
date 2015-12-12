'use strict';
const os = require('os');

module.exports = function(r, opts) {
    var opts = opts || {
        table: 'errors'
    };

    function insert(errOrPromise, isPromise) {
        return r.table(opts.table).insert({
            host: os.hostname(),
            pid: process.pid,
            date: new Date(),
            stack: errOrPromise.stack ? errOrPromise.stack : errOrPromise,
            argv: process.argv,
            cwd: process.cwd(),
            memory: process.memoryUsage(),
            uptime: process.uptime(),
            promise: isPromise,
            uid: process.getuid(),
            groups: process.getgroups(),
            load: os.loadavg()

        }).run();
    }

    function handleUncaughtException(err) {
        console.error((new Date).toUTCString() + ' uncaughtException:', err.stack ? err.stack : err)
        return insert(err, false)
            .then(function() {
                process.exit(1)
            })
    };

    function handleUnhandledRejection(reason, promise) {
        console.error((new Date).toUTCString() + ' unhandledPromiseRejection:', reason.stack)
        return insert(reason, true);
    };

    process.on('uncaughtException', handleUncaughtException);
    process.on('unhandledRejection', handleUnhandledRejection);
}
