ABXY.entity = (function() {

var entity = ABXY.messagepasser.Extend({
    Init: function(name) {
        this._super(name);

        this.world = null;
    },

    Update: function() { },
    Draw: function(context) { },

    Register: function(world) {
        this.world = world;
        this.SetMessageParent(world);
    },

    GetWorld: function() {
        return this.world;
    },
});

return entity;

})();
