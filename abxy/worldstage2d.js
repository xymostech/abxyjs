ABXY.worldstage2d = (function() {

var worldstage2d = ABXY.worldstage.Extend({
    Init: function(name, options) {
        this._super(name, options);

        this.position = new ABXY.vector2d(0, 0);
        this.scale = new ABXY.vector2d(1, 1);
    },

    Draw: function(context) {
        context.save();

        context.translate(-this.position.x, -this.position.y);
        context.scale(this.scale.x, this.scale.y);

        this._super(context);

        context.restore();
    },
});

return worldstage2d;

})();
