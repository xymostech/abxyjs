/* timer module
 * uses the highest accuracy timer available */
ABXY.Timer = (function() {
    "use strict";

    var Timer = {};

    Timer.slow = Date.now;

    if (window.performance && window.performance.now) {
        Timer.now = function() { return window.performance.now(); };
    } else if (window.performance && window.performance.webkitNow) {
        Timer.now = function() { return window.performance.webkitNow(); };
    } else {
        Timer.now = Date.now;
    }

    return Timer;

})();
