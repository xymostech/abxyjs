ABXY.worldstage2d = (function() {

var worldstage2d = ABXY.worldstage.Extend({
    Init: function(name, options) {
        this._super(name, options);

        this.position = new ABXY.vector2d(0, 0);
    },

    Draw: function(context) {
        context.save();

        context.translate(-this.position.x, -this.position.y);

        this._super(context);

        context.restore();
    },
});

return worldstage2d;

})();
