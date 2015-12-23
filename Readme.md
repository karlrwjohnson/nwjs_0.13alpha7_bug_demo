This is a demonstration of two bugs I found in NW.js, version 0.13alpha7 (Linux).

The first bug is that `require()`d modules (that is, running in a NodeJS context)
do not inherit the same global objects as those in the NodeJS context. Most
notably, the `console` object does not log to the DevTools window, but even
objects like String and Array are different references, which breaks instanceof.

The second bug is that runtime exceptions in asynchronous functions in
`require()`d modules do not produce a stack trace in either the DevTools window
or the terminal.

![screenshot](https://raw.githubusercontent.com/karlrwjohnson/nwjs_0.13alpha7_bug_demo/master/devtools_screenshot.png)

Take a look at the screenshot above and index.htm. I've defined four functions,
`ok()`, `bad()`, `ok_local()`, and `bad_local()`, which each take a callback
function as their only parameter. `ok()` and `ok_local()` each call `setTimeout`
to invoke the callback after 1000ms, passing a string as an argument. The "bad"
versions do almost the same thing, except they pass `UNDEFINED_SYMBOL`, which
causes an error at runtime.

The only difference between the normal and `*_local` functions is that the
former are defined in `require()`d modules while the latter are defined in
`index.htm`.

In the screenshot, we see that both `ok*()` functions succeed as they're intended
to, and `bad_local()` causes a stack trace to be logged. **But** there's no
mention of `bad()` -- it fails silently!
