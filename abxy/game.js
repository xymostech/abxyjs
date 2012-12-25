/* Main game class */

ABXY.game = (function() {

var game = ABXY.base.Extend({
    /* initialize with the main canvas */
    Init: function(canvas, options) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");

        this.options = $.extend({
            width: 800,
            height: 600,
        }, options);

        this.canvas.width = this.options.width;
        this.canvas.height = this.options.height;

        this.stage = null;
    },

    SetStage: function(stage) {
        if (this.stage) {
            this.stage.OnUnload();
        }
        this.stage = stage;
        this.stage.OnLoad(this);
    },

    Update: function() {
        if (this.stage) {
            this.stage.Update();
        }
    },

    Draw: function() {
        if (this.stage) {
            this.stage.Draw(this.context);
        }
    },
});

return game;

})();
