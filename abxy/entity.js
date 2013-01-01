/* entity
 * entities are contained by worlds, and do all of the work that needs to be
 * done in the game
 */

ABXY.entity = (function() {

var entity = ABXY.messagepasser.Extend({
    Init: function(name) {
        this._super(name);

        this.world = null;
    },

    Update: function(time) { },
    Draw: function(context) { },

    Register: function(world) {
        this.world = world;
        this.SetMessageParent(world);
    },

    GetParentWorld: function() {
        return this.world;
    },
});

return entity;

})();
