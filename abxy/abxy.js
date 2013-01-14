/*
 * Main ABXY file, mainly deals with loading all the other required scripts
 */

// ABXY module
ABXY = (function() {
    "use strict";

    // Main ABXY object
    var ABXY = {
        // Internal on_load storage
        _loaded: false,
        _on_load_funcs: [],

        // Add a function to a queue that runs once ABXY is loaded
        OnLoad: function(func) {
            if (this._loaded) {
                // If it's already loaded, just run it now
                func();
            } else {
                // Else, add it to the queue
                this._on_load_funcs.push(func);
            }
        },

        // Internal function called when everything is loaded
        _WhenLoaded: function() {
            this._loaded = true;
            // Run all of the on_load functions
            _.each(this._on_load_funcs, function(func) { func(); });
        },

        _main_dependencies: {
            "util": [],
            "math": [],
            "base": [],
            "collide": [],
            "vector": ["base"],
            "messagepasser": ["base"],
            "game": ["messagepasser"],
            "stage": ["messagepasser"],
            "worldstage": ["stage"],
            "worldstage2d": ["worldstage"],
            "world": ["messagepasser"],
            "entity": ["messagepasser"],
            "entity2d": ["entity"],
            "sprite": ["base"],
            "spritesheet2d": ["base"],
            "key": ["base"],
            "mouse": ["base"],
            "timer": [],
            "sound": ["base"]
        },

        /*
         * Load all the dependent files of ABXY. Currently, just loads all of
         * the ABXY files. Maybe at some point, this will turn into a minified
         * version (thus removing the need to load the scripts seperately) or
         * there will be some sort of way of telling ABXY what dependencies are
         * needed.
         */
        Startup: function(options) {
            options = $.extend({
                root: "abxy"
            }, options);

            this.Loader.LoadDependencies(
                options.root,
                this._main_dependencies,
                this._WhenLoaded.bind(this)
            );
        },
    };

    // Dependencies loading module
    ABXY.Loader = {
        LoadDependencies: function(root, dependencies, callback) {
            var load_status = {};

            // Check for loops
            if (!this._FindLoops(dependencies)) {
                console.error("There are cycles in your dependency graph!");
                return;
            }

            // Start loading all the scripts
            var loaded = _.map(dependencies, function(d, script) {
                return this._LoadScript(
                    script, dependencies, root, load_status
                );
            }, this);

            // Loop until all the scripts are loaded
            var check_scripts = function() {
                if (!_.all(loaded, function(l) { return l(); })) {
                    timeout = setTimeout(check_scripts, 0);
                } else {
                    // When they are, report back
                    callback();
                }
            };

            // Start the loop
            var timeout = setTimeout(check_scripts, 0);
        },

        _FindLoops: function(dependencies) {
            var rec = function(script, marks) {
                if (marks[script]) {
                    return false;
                }

                marks[script] = true;

                return _.all(dependencies[script], function(s) {
                    return rec(s, marks);
                }, this);
            };

            return _.all(dependencies, function(_, d) {
                return rec(d, {});
            }, this);
        },

        /* Loads a script and returns a function which tells you whether the
         * script is loaded or not */
        _LoadScript: function(script, dependencies, base, load_status) {
            var finished = false;

            var do_load = function() {
                load_status[script] = "loading";

                $.ajax({
                    async: true,
                    type: 'GET',
                    url: base + "/" + script + ".js",
                    success: function() {
                        finished = true;
                        load_status[script] = "loaded";
                    },
                    dataType: 'script',
                    error: function(xhr, textStatus, errorThrown) {
                        console.error(
                            "Error loading " + script + ": " + errorThrown
                        );
                        finished = true;
                        load_status[script] = "loaded";
                    }
                });
            };

            var do_wait = function() {
                if (_.all(dependencies[script], function(d) {
                            return load_status[d] &&
                                   load_status[d] === "loaded";
                        }, this)) {
                    do_load();
                } else {
                    setTimeout(do_wait, 0);
                }
            };

            load_status[script] = "waiting";

            _.each(dependencies[script], function(d) {
                if (load_status[d] == null) {
                    this._LoadScript(d, dependencies, base, load_status);
                }
            }, this);

            do_wait();

            return function() {
                return finished;
            };
        },
    };

    return ABXY;

})();
