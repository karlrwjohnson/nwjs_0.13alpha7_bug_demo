This is a demonstration of two bugs I found in NW.js, version 0.13alpha7 (Linux).

The first bug is that require()d modules (that is, running in a NodeJS context)
do not inherit the same global objects as those in the NodeJS context. Most
notably, the `console` object does not log to the DevTools window, but even
objects like String and Array are different references, which breaks instanceof.

The second bug is that runtime exceptions in asynchronous functions in
require()d modules do not produce a stack trace in either the DevTools window
or the terminal.

