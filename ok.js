'use strict';

module.exports = function(callback) {
    console.log('ok.js: Going to call callback in 1 second');
    setTimeout(function() {
        console.log('ok.js: About to call callback');
        callback('OKAY');
        console.log('ok.js: Called callback');
    }, 1000);
};

