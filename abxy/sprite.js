ABXY.sprite = (function() {

var sprite = ABXY.entity2d.Extend({
    Init: function(name, image, x, y, xvel, yvel, angle, angvel) {
        this._super(name, x, y, xvel, yvel, angle, angvel);

        this.texture = new Image();
        this.texture.src = image;
        this.image = image;
    },

    Draw: function(context) {
        context.save();

        this.Transform(context);

        context.drawImage(this.texture, 0, 0);

        context.restore();
    },
});

return sprite;

})();
