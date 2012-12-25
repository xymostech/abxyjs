ABXY.entity = (function() {

var entity = ABXY.base.Extend({
    Init: function() {
        this.world = null;
    },

    Update: function() { },
    Draw: function(context) { },

    Register: function(world) {
        this.world = world;
    },

    GetWorld: function() {
        return this.world;
    },
});

return entity;

})();
