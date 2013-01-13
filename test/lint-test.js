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
                    }

                    return error;
                });

                buster.log("Lint Errors:\n" + errors.join("\n\n"));
            }

            assert(result);
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
});
