/* worldstage
 * A stage that contains and updates a world
 */

ABXY.worldstage = (function() {

var worldstage = ABXY.stage.Extend({
    Init: function(name, options) {
        this._super(name);

        this.options = $.extend({
            worldClass: ABXY.world,
        }, options);

        this.world = new this.options.worldClass(this);
        this.AddMessageChild(this.world);
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
