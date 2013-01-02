/* timer module
 * uses the highest accuracy timer available */
ABXY.timer = (function() {

var timer = {};

timer.slow = Date.now;

if (window.performance && window.performance.now) {
    timer.now = function() { return window.performance.now(); };
} else if (window.performance && window.performance.webkitNow) {
    timer.now = function() { return window.performance.webkitNow(); };
} else {
    timer.now = Date.now;
}

return timer;

})();
