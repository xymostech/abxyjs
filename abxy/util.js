ABXY.util = (function() {

var util = {
    /* provides an easy way to set default values for arguments.
     * Taken from http://stackoverflow.com/a/894877/57318 */
    defarg: function(val, def) {
        return typeof val !== 'undefined' ? val : def;
    },
};

return util;

})();
