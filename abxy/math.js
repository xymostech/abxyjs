ABXY.math = (function() {

var math = {
    /* generates a random number between two endpoints */
    random: function(low, high) {
        return Math.random() * (high - low) + low;
    },

    /* generates a random integer between two endpoints, excluding the high
     * point */
    randint: function(low, high) {
        return Math.floor(ABXY.math.random(low, high));
    },
};

return math;

})();
