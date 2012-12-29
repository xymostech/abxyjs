ABXY.util = (function() {

var util = {
    /* provides an easy way to set default values for arguments.
     * Taken from http://stackoverflow.com/a/894877/57318 */
    defarg: function(val, def) {
        return typeof val !== 'undefined' ? val : def;
    },

    /* generates a random number between two endpoints */
    random: function(low, high) {
        return Math.random() * (high - low) + low;
    },

    /* generates a random integer between two endpoints, excluding the high
     * point */
    randint: function(low, high) {
        return Math.floor(ABXY.util.random(low, high));
    },
};

return util;

})();
