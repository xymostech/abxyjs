/* spritesheet2d
 * a spritesheet2d is a sheet of sprites, all loaded from one image */

ABXY.spritesheet2d = (function() {

var spritesheet2d = ABXY.base.Extend({
    Init: function(image, columns, rows, width, height) {
        this.image = image;

        this.columns = columns;
        this.rows = rows;
        this.width = width;
        this.height = height;

        this.texture = new Image();
        this.texture.src = image;
    },

    Draw: function(context, sprite) {
        var yoff = Math.floor(sprite / this.columns);
        var xoff = sprite % this.columns;

        if (yoff + 1 > this.rows) return;

        context.drawImage(
            this.texture,
            xoff * this.width, yoff * this.height,
            this.width, this.height,
            0, 0,
            this.width, this.height
        );
    },
});

return spritesheet2d;

})();
