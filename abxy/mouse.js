ABXY.Mouse = (function() {
    "use strict";

    var Mouse = ABXY.Base.Extend({
        Init: function(canvas) {
            this.canvas = canvas;

            this.pos = new ABXY.Vector2d(0, 0);

            this.buttons = {};
            this.last_buttons = {};

            $(canvas).mousemove(this.OnMouseMove.bind(this));
            $(canvas).mousedown(this.OnMouseDown.bind(this));
            $(canvas).mouseup(this.OnMouseUp.bind(this));
            $(canvas).contextmenu(this.OnContextMenu.bind(this));
        },

        OnMouseMove: function(e) {
            this.pos.x = e.offsetX;
            this.pos.y = e.offsetY;
        },

        OnMouseDown: function(e) {
            this.buttons[e.button] = true;
        },

        OnMouseUp: function(e) {
            this.buttons[e.button] = false;
        },

        OnContextMenu: function(e) {
            e.preventDefault();
        },

        Update: function() {
            this.last_buttons = {};
            _.each(this.buttons, function(k, v) {
                this.last_buttons[v] = k;
            }, this);
        },

        IsButtonPressed: function(button) {
            return Boolean(this.buttons[button]);
        },

        IsButtonEdge: function(button) {
            return Boolean(this.buttons[button]) !==
                   Boolean(this.last_buttons[button]);
        },

        IsButtonState: function(button, pressed, edge) {
            return this.IsButtonPressed(button) === pressed &&
                   this.IsButtonEdge(button) === edge;
        },

        MousePos: function() {
            return new ABXY.Vector2d(this.pos.x, this.pos.y);
        },
    });

    return Mouse;

})();
