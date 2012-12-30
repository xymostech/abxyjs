ABXY.vector2d = (function() {

var vector2d = function(x, y) {
    this.x = x;
    this.y = y;
};

vector2d.prototype.Add = function(vect) {
    return new vector2d(this.x + vect.x, this.y + vect.y);
};

vector2d.prototype.Mult = function(scale) {
    return new vector2d(this.x * scale, this.y * scale);
};

return vector2d;

})();

ABXY.vector3d = (function() {

var vector3d = function(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
};

vector3d.prototype.Add = function(vect) {
    return new vector3d(this.x + vect.x, this.y + vect.y, this.z + vect.z);
};

vector3d.prototype.Mult = function(scale) {
    return new vector3d(this.x * scale, this.y * scale, this.z * scale);
};

return vector3d;

})();
