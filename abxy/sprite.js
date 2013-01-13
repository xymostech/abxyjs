/* sprite
 * a sprite is a single image which can be drawn
 */

ABXY.Sprite = (function() {
    "use strict";

    var Sprite = ABXY.Base.Extend({
        Init: function(image) {
            this.texture = new Image();
            this.texture.src = image;
            this.image = image;
        },

        Draw: function(context) {
            context.drawImage(this.texture, 0, 0);
        }
    });

    return Sprite;

})();
