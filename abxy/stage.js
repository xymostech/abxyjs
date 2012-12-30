/* Main stage class
 * Stages are loaded and unloaded by the game. They hold all of the content of
 * the game. */
ABXY.stage = (function() {

var stage = ABXY.messagepasser.Extend({
    Init: function(name) {
        this._super(name);

        this.loaded = false;
    },

    /* By default, stages don't do anything fun */
    Draw: function(context) { },
    Update: function(time) { },

    OnLoad: function(game) {
        this.loaded = true;
        this.game = game;
        this.SetMessageParent(game);
    },

    OnUnload: function() {
        this.loaded = false;
        this.SetMessageParent(null);
    },
});

return stage;

})();
