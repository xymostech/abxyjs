/* entity
 * entities are contained by worlds, and do all of the work that needs to be
 * done in the game
 */

ABXY.Entity = (function() {
    "use strict";

    var Entity = ABXY.Messagepasser.Extend({
        Init: function(name) {
            this._super(name);

            this.world = null;

            this.types = [];

            this.AddType("entity");
        },

        Update: function(/* data */) { },
        Draw: function(/* context */) { },

        Register: function(world) {
            this.parent = world;
            this.SetMessageParent(this.parent);
        },

        AddType: function(type) {
            this.types.push(type);
        },

        IsType: function(type) {
            return this.types.indexOf(type) !== -1;
        },
    });

    return Entity;

})();
