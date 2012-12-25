ABXY.worldstage = (function() {

var worldstage = ABXY.stage.Extend({
    Init: function(options) {
        this.options = $.extend({
            worldClass: ABXY.world,
        }, options);

        this.world = new this.options.worldClass(this);
    },

    Update: function() {
        this.world.Update();
    },

    Draw: function(context) {
        this.world.Draw(context);
    },
});

return worldstage;

})();
