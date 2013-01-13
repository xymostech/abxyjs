ABXY.Collide2d = (function() {
    "use strict";

    var Collide2d = {
        PointRect: function(x1, y1, x2, y2, w2, h2) {
            return x1 > x2 &&
                   x1 < x2 + w2 &&
                   y1 > y2 &&
                   y1 < y2 + h2;
        },

        PointCircle: function(x1, y1, x2, y2, r2) {
            return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) < r2 * r2;
        },

        RectRect: function(x1, y1, w1, h1, x2, y2, w2, h2) {
            return x1 < x2 + w2 &&
                   x1 + w1 > x2 &&
                   y1 < y2 + h2 &&
                   y1 + h1 > y2;
        },

        CircleCircle: function(x1, y1, r1, x2, y2, r2) {
            return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) <
                        (r1 + r2) * (r1 + r2);
        },

        RectCircle: function(x1, y1, w1, h1, x2, y2, r2) {
            var above = y2 < y1,
                below = y2 > y1 + h1,
                left  = x2 < x1,
                right = x2 > x1 + w1;

            if (!above && !below) {
                return x2 - r2 < x1 + w1 && x2 + r2 > x1;
            } else if (!left && !right) {
                return y2 - r2 < y1 + h1 && y2 + r2 > y1;
            } else if (left && above) {
                return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) < r2 * r2;
            } else if (right && above) {
                return (x2 - (x1 + w1)) * (x2 - (x1 + w1)) +
                       (y2 - y1) * (y2 - y1) <
                           r2 * r2;
            } else if (left && below) {
                return (x2 - x1) * (x2 - x1) +
                       (y2 - (y1 + h1)) * (y2 - (y1 + h1)) <
                           r2 * r2;
            } else if (right && below) {
                return (x2 - (x1 + w1)) * (x2 - (x1 + w1)) +
                       (y2 - (y1 + h1)) * (y2 - (y1 + h1)) <
                           r2 * r2;
            }
        },

        PointPolygon: function(x1, y1, poly2, ccw) {
            ccw = ABXY.Util.defarg(ccw, true);

            var polyvecs = _.map(poly2, function(v) {
                return new ABXY.Vector2d(v[0], v[1]);
            });
            var pointvec = new ABXY.Vector2d(x1, y1);

            for (var i = 0; i < polyvecs.length; ++i) {
                var j = (i + 1) % polyvecs.length;

                var u = polyvecs[j].Sub(polyvecs[i]);
                var v = pointvec.Sub(polyvecs[i]);

                var wedge = u.x * v.y - u.y * v.x;

                if (ccw && wedge < 0) {
                    return false;
                } else if (!ccw && wedge > 0) {
                    return false;
                }
            }

            return true;
        }
    };

    return Collide2d;

})();
