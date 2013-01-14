/* Easy constructors for various shape objects */

ABXY.Rect = (function() {
    "use strict";

    var Rect = ABXY.Base.Extend({
        Init: function(x, y, width, height) {
            this.type = "rect";
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        },
    });

    return Rect;

})();

ABXY.Circle = (function() {
    "use strict";

    var Circle = ABXY.Base.Extend({
        Init: function(x, y, radius) {
            this.type = "circle";
            this.x = x;
            this.y = y;
            this.radius = radius;
        },
    });

    return Circle;

})();
