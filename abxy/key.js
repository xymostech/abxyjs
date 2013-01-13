/* keyboard input management */
ABXY.Key = (function() {
    "use strict";

    var Key = ABXY.Base.Extend({
        Init: function(canvas) {
            this.canvas = canvas;
            this.keys = {};
            this.last_keys = {};

            $(this.canvas).keydown(this.OnKeyDown.bind(this));
            $(this.canvas).keyup(this.OnKeyUp.bind(this));
            $(this.canvas).focus();
        },

        OnKeyDown: function(e) {
            this.keys[e.keyCode] = true;
        },

        OnKeyUp: function(e) {
            this.keys[e.keyCode] = false;
        },

        Update: function() {
            this.last_keys = {};
            _.each(this.keys, function(k, v) {
                this.last_keys[v] = k;
            }, this);
        },

        IsKeyPressed: function(k) {
            return Boolean(this.keys[Key.keys[k]]);
        },

        IsKeyEdge: function(k) {
            var code = Key.keys[k];
            return Boolean(this.keys[code]) !== Boolean(this.last_keys[code]);
        },

        IsKeyState: function(k, pressed, edge) {
            return this.IsKeyPressed(k) === pressed &&
                   this.IsKeyEdge(k) === edge;
        }
    });

    /* default keys that can't be figured out any other way */
    Key.keys = {
        "ctrl": 17,
        "alt": 18,
        "cmd": 91,
        "rcmd": 93,
        "shift": 16,
        "esc": 27,
        "escape": 27,
        "tab": 9,
        "backspace": 8,
        "del": 46,
        "delete": 46,
        "home": 36,
        "end": 35,
        "left": 37,
        "right": 39,
        "up": 38,
        "down": 40,
        "pgup": 33,
        "pgdown": 34,
        "tilde": 192,
        "`": 192,
        "[": 219,
        "]": 221,
        "semicolon": 186,
        ";": 186,
        "quote": 222,
        "'": 222,
        "slash": 191,
        "/": 191,
        "backslash": 220,
        "\\": 220,
        "period": 190,
        ".": 190,
        "comma": 188,
        ",": 188,
        "dash": 189,
        "-": 189,
        "equals": 187,
        "=": 187
    };

    /* Normal letters and numbers */
    _.each("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", function(k) {
        Key.keys[k] = k.charCodeAt(0);
    });
    /* lower case letters */
    _.each("abcdefghijklmnopqrstuvwxyz", function(k) {
        Key.keys[k] = k.charCodeAt(0) - 32;
    });
    /* f-keys */
    _.each([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], function(n) {
        Key.keys["f" + n] = 111 + n;
    });

    return Key;

})();
