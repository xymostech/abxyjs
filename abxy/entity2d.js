/* entity2d
 * an entity2d is an entity that provides basic 2d manipulation */

ABXY.Entity2d = (function() {
    "use strict";

    var Entity2d = ABXY.Entity.Extend({
        Init: function(name, x, y, xvel, yvel, angle, angvel) {
            this._super(name);

            this.AddType("entity2d");

            x = ABXY.Util.defarg(x, 0);
            y = ABXY.Util.defarg(y, 0);
            xvel = ABXY.Util.defarg(xvel, 0);
            yvel = ABXY.Util.defarg(yvel, 0);
            angle = ABXY.Util.defarg(angle, 0);
            angvel = ABXY.Util.defarg(angvel, 0);

            this.pos = new ABXY.Vector2d(x, y);
            this.vel = new ABXY.Vector2d(xvel, yvel);
            this.angle = angle;
            this.angvel = angvel;
        },

        Update: function(data) {
            this.pos = this.pos.Add(this.vel.Mult(data.time));
            this.angle += this.angvel * data.time;
        },

        Transform: function(context) {
            context.translate(this.pos.x, this.pos.y);
            context.rotate(this.angle);
        }
    });

    return Entity2d;

})();
