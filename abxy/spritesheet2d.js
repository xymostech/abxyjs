ABXY.spritesheet2d = (function() {

var spritesheet2d = ABXY.base.Extend({
    Init: function(image, rows, columns, width, height) {
        this.image = image;

        this.rows = rows;
        this.columns = columns;
        this.width = width;
        this.height = height;

        this.texture = new Image();
        this.texture.src = image;
    },

    Draw: function(context, sprite) {
        var yoff = sprite / this.columns;
        var xoff = sprite % this.columns;

        if (yoff + 1 > this.rows) return;

        context.drawImage(
            this.texture,
            0, 0,
            this.width, this.height,
            xoff * this.width, yoff * this.height,
            this.width, this.height
        );
    },
});

return spritesheet2d;

})();
