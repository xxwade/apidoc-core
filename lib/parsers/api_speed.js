var trim     = require('../utils/trim');
var unindent = require('../utils/unindent');

function parse(content) {
    var speed = trim(content);

    if (speed.length === 0)
        return null;

    return {
        speed: unindent(speed)
    };
}

/**
 * Exports
 */
module.exports = {
    parse         : parse,
    path          : 'local',
    method        : 'insert',
    markdownFields: [ 'speed' ]
};
