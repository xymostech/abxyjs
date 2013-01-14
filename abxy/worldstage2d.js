ABXY.Worldstage2d = (function() {
    "use strict";

    var Worldstage2d = ABXY.Worldstage.Extend({
        Init: function(name, options) {
            this._super(name, options);

            this.position = new ABXY.Vector2d(0, 0);
            this.scale = new ABXY.Vector2d(1, 1);
        },

        Draw: function(context) {
            context.save();

            context.translate(-this.position.x, -this.position.y);
            context.scale(this.scale.x, this.scale.y);

            this._super(context);

            context.restore();
        },

        ScrollTo: function(pos) {
            this.position = pos;
        },
    });

    return Worldstage2d;

})();
