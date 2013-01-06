ABXY.vector2d = (function() {

var vector2d = ABXY.base.Extend({
    Init: function(x, y) {
        this.x = x;
        this.y = y;
    },

    Add: function(vect) {
        return new vector2d(this.x + vect.x, this.y + vect.y);
    },

    Sub: function(vect) {
        return new vector2d(this.x - vect.x, this.y - vect.y);
    },

    Mult: function(scale) {
        return new vector2d(this.x * scale, this.y * scale);
    },

    Div: function(scale) {
        return new vector2d(this.x / scale, this.y / scale);
    },
});

return vector2d;

})();

ABXY.vector3d = (function() {

var vector3d = ABXY.base.Extend({
    Init: function(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    },

    Add: function(vect) {
        return new vector3d(this.x + vect.x, this.y + vect.y, this.z + vect.z);
    },

    Sub: function(vect) {
        return new vector3d(this.x - vect.x, this.y - vect.y, this.z - vect.z);
    },

    Mult: function(scale) {
        return new vector3d(this.x * scale, this.y * scale, this.z * scale);
    },

    Div: function(scale) {
        return new vector3d(this.x / scale, this.y / scale, this.z / scale);
    },
});

return vector3d;

})();
