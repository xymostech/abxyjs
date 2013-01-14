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
    devel: true,
    es5: true,
};

var default_globals = {
    "_": false,
    "ABXY": true
};

var tests = {};

_.each(ABXY._main_dependencies, function(v, k) {
    tests["lint " + k + ".js"] = function(done) {
        test_lint(done, k, default_options, default_globals);
    };
});

buster.testCase("lint", tests);
