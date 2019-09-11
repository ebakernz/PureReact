Each example directory has the same structure.

Run "npm install", then run "npm start".

If you don't want to wait for `npm install` to finish for every directory, you can copy the `node_modules` directory from one to another.

When copying `node_modules` on Mac or Linux, use the command `cp -a`, not `cp -r`. Due to the way npm uses symbolic links, using `cp -r` will break the `npm start` command.
