/* Main game class */

ABXY.Game = (function() {
    "use strict";

    var Game = ABXY.Messagepasser.Extend({
        /* initialize with the main canvas */
        Init: function(name, canvas, options) {
            this._super(name);

            this.canvas = canvas;
            this.context = this.canvas.getContext("2d");

            this.options = $.extend({
                width: 800,
                height: 600,
                fps: 60,
                smooth: true
            }, options);

            this.stats = {
                fps: this.options.fps
            };

            this.canvas.width = this.options.width;
            this.canvas.height = this.options.height;

            this.stage = null;

            this.fps_time = this.last_time = this.end_sleep = ABXY.Timer.now();
            this.fps_count = 0;

            this.keys = new ABXY.Key(this.canvas);
            this.mouse = new ABXY.Mouse(this.canvas);

            this.SetSmooth(this.options.smooth);
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
            var time = ABXY.Timer.now();
            var diff_time = time - this.last_time;
            this.last_time = time;

            var data = {
                time: diff_time / 1000,
                keys: this.keys,
                mouse: this.mouse
            };

            if (this.stage) {
                this.stage.Update(data);
            }

            ABXY.Messagequeue.instance.SendMessages();
            this.keys.Update();
            this.mouse.Update();
        },

        Draw: function() {
            this.context.setTransform(1, 0, 0, 1, 0, 0);
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

            if (this.stage) {
                this.stage.Draw(this.context);
            }
        },

        Sleep: function(callback) {
            if (ABXY.Timer.now() - this.fps_time > 1000) {
                this.fps_time += 1000;
                this.stats.fps = this.fps_count;
                this.fps_count = 0;
            } else {
                this.fps_count++;
            }

            var that = this;

            var call = function() {
                that.end_sleep = ABXY.Timer.now();
                callback();
            };

            setTimeout(
                call,
                Math.max(
                    1000 / this.options.fps -
                        (ABXY.Timer.now() - this.end_sleep),
                    0
                )
            );
        },

        SetSmooth: function(smooth) {
            this.options.smooth = smooth;

            this.context.imageSmoothingEnabled = smooth;
            this.context.webkitImageSmoothingEnabled = smooth;
            this.context.mozImageSmoothingEnabled = smooth;
        }
    });

    return Game;

})();
