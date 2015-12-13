# rethink-handle-uncaught
Log uncaught exceptions and promise rejections stacks into RethinkDB.

Suitable for production, as it also logs:

1. Date
2. hostname
3. pid
4. stack
5. argv
6. cwd
7. memory
8. uptime
9. uid
10. groups
11. system load
