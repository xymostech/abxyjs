/* Main stage class
 * Stages are loaded and unloaded by the game. They hold all of the content of
 * the game. */
ABXY.stage = (function() {

var stage = ABXY.base.Extend({
    /* stages hold on to their parent game */
    Init: function() {
        this.loaded = false;
    },

    /* By default, stages don't do anything fun */
    Draw: function(context) { },
    Update: function() { },

    OnLoad: function(game) {
        this.loaded = true;
        this.game = game;
    },

    OnUnload: function() {
        this.loaded = false;
    },
});

return stage;

})();
