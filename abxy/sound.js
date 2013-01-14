/* sound
 * an easy interface to use with the HTML5 audio API */

ABXY.Sound = (function() {
    "use strict";

    var Sound = ABXY.Base.Extend({
        Init: function(file, repeat, volume) {
            this.sound = new Audio(file);

            if (repeat) {
                this.sound.loop = true;
            }

            this.volume = ABXY.Util.defarg(volume, 1);
            this.SetVolume(this.volume);
        },

        /* Play the sound, and if cont is true, continue from where it last
         * left off */
        Play: function(cont) {
            if (!cont) {
                this.sound.currentTime = 0;
                /* due to a bug in some webservers (notably python's
                 * simpleHTTPserver, which is used for testing) some audio tags
                 * don't allow seeking. Thus, we take the hit and reload the
                 * sound file if seeking failed */
                if (this.sound.currentTime > 0) {
                    var src = this.sound.src;
                    this.sound.src = "";
                    this.sound.src = src;
                }
            }

            this.sound.play();
        },

        Pause: function() {
            this.sound.pause();
        },

        /* Valid volumes are between 0 and 1 */
        SetVolume: function(volume) {
            this.volume = ABXY.Math.clamp(volume, 0, 1);
            this.sound.volume = this.volume;
        },
    });

    return Sound;

})();
