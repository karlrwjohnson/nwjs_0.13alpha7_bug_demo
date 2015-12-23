'use strict';

module.exports = function globalsWorkaround (guiWindow) {
    console = guiWindow.console;
}

