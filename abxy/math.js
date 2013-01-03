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

    /* performs a linear interpolation of the first value to the second value,
     * with the third value as the amount of interpolation */
    lerp: function(from, to, l) {
        return (to - from) * l + from;
    },

    /* clamps the first value to a value between the second and third values */
    clamp: function(val, low, high) {
        return (val < low) ? low : (val > high) ? high : val;
    },
};

return math;

})();
