/* Main game class */

ABXY.game = (function() {

var game = ABXY.messagepasser.Extend({
    /* initialize with the main canvas */
    Init: function(name, canvas, options) {
        this._super(name);

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
            this.RemoveMessageChild(this.stage);
        }
        this.stage = stage;
        this.AddMessageChild(this.stage);
        this.stage.OnLoad(this);
    },

    Update: function() {
        if (this.stage) {
            this.stage.Update();
        }

        ABXY.messagequeue.instance.SendMessages();
    },

    Draw: function() {
        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.stage) {
            this.stage.Draw(this.context);
        }
    },
});

return game;

})();
