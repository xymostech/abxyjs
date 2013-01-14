/* A base for entities which can collide with each other */
ABXY.CollideEntity2d = (function() {
    "use strict";

    var CollideEntity2d = ABXY.Entity2d.Extend({
        Init: function(name, x, y, shape, xvel, yvel, angle, angvel) {
            this._super(name, x, y, xvel, yvel, angle, angvel);

            this.shape = shape;
        },

        CollidesWith: function(other) {
            if (this.shape.type === "rect") {
                if (other.shape.type === "rect") {
                    return ABXY.Collide2d.RectRect(
                        this.pos.x + this.shape.x,
                        this.pos.y + this.shape.y,
                        this.shape.width,
                        this.shape.height,
                        other.pos.x + other.shape.x,
                        other.pos.y + other.shape.y,
                        other.shape.width,
                        other.shape.height
                    );
                } else if (other.shape.type === "circle") {
                    return ABXY.Collide2d.RectCircle(
                        this.pos.x + this.shape.x,
                        this.pos.y + this.shape.y,
                        this.shape.width,
                        this.shape.height,
                        other.pos.x + other.shape.x,
                        other.pos.y + other.shape.y,
                        other.shape.radius
                    );
                }
            } else if (this.shape.type === "circle") {
                if (other.shape.type === "circle") {
                    return ABXY.Collide2d.CircleCircle(
                        this.pos.x + this.shape.x,
                        this.pos.y + this.shape.y,
                        this.shape.radius,
                        other.pos.x + other.shape.x,
                        other.pos.y + other.shape.y,
                        other.shape.radius
                    );
                } else if (other.shape.type === "rect") {
                    return ABXY.Collide2d.RectCircle(
                        other.pos.x + other.shape.x,
                        other.pos.y + other.shape.y,
                        other.shape.width,
                        other.shape.height,
                        this.pos.x + this.shape.x,
                        this.pos.y + this.shape.y,
                        this.shape.radius
                    );
                }
            }
        },
    });

    return CollideEntity2d;

})();
