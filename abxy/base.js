/* Base class for all ABXY classes. Includes an `extend` method to simulate
 * inheritance. */
ABXY.Base = (function() {
    "use strict";

    var initializing = false;

    /* Adapted from John Resig's Simple Javascript Inheritance
     * http://ejohn.org/blog/simple-javascript-inheritance/
     * MIT Licensed */

    var Base = function() {};

    Base.Extend = function(sub) {
        /*jshint newcap:false loopfunc:true forin:false */
        var _super = this.prototype;

        // Make a new class
        initializing = true;
        var proto = new this();
        initializing = false;

        // Store all of the inherited methods
        for (var name in sub) {
            proto[name] =
                // If there is a function that overrides an old one
                (typeof sub[name] === "function" &&
                 typeof _super[name] === "function") ?
                (function(name, fn) {
                    return function() {
                        // Store the old super variable
                        var store = this._super;
                        var ret;

                        try {
                            // Set the _super variable to the function from the
                            // parent class
                            this._super = _super[name];
                            // Call the function
                            ret = fn.apply(this, arguments);
                        } finally {
                            // Restore the _super variable
                            this._super = store;
                        }

                        return ret;
                    };
                })(name, sub[name]) :
                // Otherwise, just use the new one
                sub[name];
        }

        // our actual subclass, whose constructor calls the contained Init
        // function
        var Class = function() {
            if (!initializing && this.Init) {
                this.Init.apply(this, arguments);
            }
        };

        // Store the variables
        Class.prototype = proto;
        Class.prototype.constructor = Class;

        // Add the extend method
        Class.Extend = Base.Extend;

        return Class;
    };

    return Base;

})();
