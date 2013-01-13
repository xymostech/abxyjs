/* Main stage class
 * Stages are loaded and unloaded by the game. They hold all of the content of
 * the game. */
ABXY.Stage = (function() {
    "use strict";

    var Stage = ABXY.Messagepasser.Extend({
        Init: function(name) {
            this._super(name);

            this.loaded = false;
        },

        /* By default, stages don't do anything fun */
        Draw: function(/* context */) { },
        Update: function(/* data */) { },

        OnLoad: function(game) {
            this.loaded = true;
            this.game = game;
            this.SetMessageParent(game);
        },

        OnUnload: function() {
            this.loaded = false;
            this.SetMessageParent(null);
        }
    });

    return Stage;

})();
