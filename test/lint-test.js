var test_lint = function(done, file, options, globals) {
    $.ajax({
        dataType: "text",
        url: "abxy/" + file + ".js",
        success: done(function(data) {
            var result = JSHINT(data, options, globals);

            if (!result) {
                var errors = _.map(JSHINT.errors, function(e) {
                    if (!e) {
                        return;
                    }

                    var error = "";
                    if (e.line) {
                        error += "Line " + e.line + ": ";
                    }
                    if (e.reason) {
                        error += e.reason;
                    }
                    error += "\n";
                    if (e.evidence) {
                        error += e.evidence;
                        if (e.character) {
                            error += '\n' +
                                     (new Array(e.character)).join(' ') +
                                     '^'
                        }
                    }

                    return error;
                });

                buster.log("Lint Errors:\n" + errors.join("\n\n"));
            }

            assert(result);
        }),
        error: done(function(data, stat, error) {
            buster.log("Error loading " + file + ".js: " + error);

            assert(false);
        })
    });
};

var default_options = {
    bitwise: true,
    curly: true,
    eqeqeq: true,
    forin: true,
    immed: true,
    indent: 4,
    latedef: true,
    noarg: true,
    undef: true,
    unused: true,
    strict: true,
    trailing: true,
    maxlen: 80,
    eqnull: true,
    browser: true,
    jquery: true,
    devel: true
};

var default_globals = {
    "_": false,
    "ABXY": false
};

buster.testCase("lint", {
    "lint abxy.js": function(done) {
        test_lint(done, "abxy", default_options, {
            "_": false,
            "ABXY": true
        });
    },

    "lint base.js": function(done) {
        test_lint(done, "base", default_options, default_globals);
    },

    "lint collide.js": function(done) {
        test_lint(done, "collide", default_options, default_globals);
    },

    "lint entity.js": function(done) {
        test_lint(done, "entity", default_options, default_globals);
    },

    "lint entity2d.js": function(done) {
        test_lint(done, "entity2d", default_options, default_globals);
    },

    "lint game.js": function(done) {
        test_lint(done, "game", default_options, default_globals);
    },

    "lint key.js": function(done) {
        test_lint(done, "key", default_options, default_globals);
    },

    "lint math.js": function(done) {
        test_lint(done, "math", default_options, default_globals);
    },

    "lint messagepasser.js": function(done) {
        test_lint(done, "messagepasser", default_options, default_globals);
    },

    "lint mouse.js": function(done) {
        test_lint(done, "mouse", default_options, default_globals);
    },

    "lint sound.js": function(done) {
        test_lint(done, "sound", default_options, default_globals);
    },

    "lint sprite.js": function(done) {
        test_lint(done, "sprite", default_options, default_globals);
    },

    "lint spritesheet2d.js": function(done) {
        test_lint(done, "spritesheet2d", default_options, default_globals);
    },

    "lint stage.js": function(done) {
        test_lint(done, "stage", default_options, default_globals);
    },

    "lint timer.js": function(done) {
        test_lint(done, "timer", default_options, default_globals);
    },

    "lint util.js": function(done) {
        test_lint(done, "util", default_options, default_globals);
    },

    "lint vector.js": function(done) {
        test_lint(done, "vector", default_options, default_globals);
    },

    "lint world.js": function(done) {
        test_lint(done, "world", default_options, default_globals);
    },

    "lint worldstage.js": function(done) {
        test_lint(done, "worldstage", default_options, default_globals);
    },

    "lint worldstage2d.js": function(done) {
        test_lint(done, "worldstage2d", default_options, default_globals);
    },
});
