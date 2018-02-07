YAY OWLIST, IT'S A HOOT

1. See the super awesome original repository here https://github.com/reactGo/reactGo

2. Added packages
    1. mongoose-delete https://github.com/dsanel/mongoose-delete
        For soft deletes
    2. mongoose-schema-extend https://github.com/briankircho/mongoose-schema-extend
        Extend... extend... extend!
    3. mongoose-timestamp https://www.npmjs.com/package/mongoose-timestamp
        This plugin may not be required (timestamps functionality included in mongoose)

3. Removed Postgre-SQL and Sequalize related files and packages (most of them)

4. IF YOU HAVE ANY ISSUES WITH "Error: listen EADDRINUSE :::3000"
    1. sudo lsof -i :3000
        (or your port number)
    2. kill -9 YOURPROCESS-NUMBER
        (ex. kill -9 36563)

5. npm run-script dev (use this one during development)
    Other possible run-scripts (see package.json for more details)
    1. lint
    2. lint
    3. clean
    4. start
    5. dev
    6. build:dev
    7. build
    8. test
    9. test:watch