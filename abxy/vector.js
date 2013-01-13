ABXY.Vector2d = (function() {
    "use strict";

    var Vector2d = ABXY.Base.Extend({
        Init: function(x, y) {
            this.x = x;
            this.y = y;
        },

        Add: function(vect) {
            return new Vector2d(this.x + vect.x, this.y + vect.y);
        },

        Sub: function(vect) {
            return new Vector2d(this.x - vect.x, this.y - vect.y);
        },

        Mult: function(scale) {
            return new Vector2d(this.x * scale, this.y * scale);
        },

        Div: function(scale) {
            return new Vector2d(this.x / scale, this.y / scale);
        }
    });

    return Vector2d;

})();

ABXY.Vector3d = (function() {
    "use strict";

    var Vector3d = ABXY.Base.Extend({
        Init: function(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        },

        Add: function(vect) {
            return new Vector3d(
                this.x + vect.x, this.y + vect.y, this.z + vect.z
            );
        },

        Sub: function(vect) {
            return new Vector3d(
                this.x - vect.x, this.y - vect.y, this.z - vect.z
            );
        },

        Mult: function(scale) {
            return new Vector3d(this.x * scale, this.y * scale, this.z * scale);
        },

        Div: function(scale) {
            return new Vector3d(this.x / scale, this.y / scale, this.z / scale);
        }
    });

    return Vector3d;

})();
