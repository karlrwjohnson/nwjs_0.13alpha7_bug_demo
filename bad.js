'use strict';

module.exports = function(callback) {
    console.log('bad.js: Going to call callback in 1 second');
    setTimeout(function() {
        console.log('bad.js: About to call callback');
        callback(UNDEFINED_SYMBOL);
        console.log('bad.js: Called callback');
    }, 1000);
};

