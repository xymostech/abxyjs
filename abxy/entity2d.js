/* entity2d
 * an entity2d is an entity that provides basic 2d manipulation */

ABXY.entity2d = (function() {

var entity2d = ABXY.entity.Extend({
    Init: function(name, x, y, xvel, yvel, angle, angvel) {
        this._super(name);

        x = ABXY.util.defarg(x, 0);
        y = ABXY.util.defarg(y, 0);
        xvel = ABXY.util.defarg(xvel, 0);
        yvel = ABXY.util.defarg(yvel, 0);
        angle = ABXY.util.defarg(angle, 0);
        angvel = ABXY.util.defarg(angvel, 0);

        this.pos = new ABXY.vector2d(x, y);
        this.vel = new ABXY.vector2d(xvel, yvel);
        this.angle = angle;
        this.angvel = angvel;
    },

    Update: function(time) {
        this.pos = this.pos.Add(this.vel.Mult(time));
        this.angle += this.angvel * time;
    },

    Draw: function(context) { },

    Transform: function(context) {
        context.translate(this.pos.x, this.pos.y);
        context.rotate(this.angle);
    },
});

return entity2d;

})();
