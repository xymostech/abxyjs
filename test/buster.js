var config = module.exports;

config["ABXY tests"] = {
    rootPath: "../",
    environment: "browser",
    libs: [
        "lib/jquery.min.js",
        "lib/underscore-min.js",
    ],
    sources: [
        "abxy/abxy.js",
        "abxy/base.js",
        "abxy/util.js",
        "abxy/math.js",
        "abxy/vector.js",
        "abxy/collide.js",
        "abxy/timer.js",
        "abxy/messagepasser.js",
        "abxy/game.js",
        "abxy/stage.js",
        "abxy/worldstage.js",
        "abxy/worldstage2d.js",
        "abxy/world.js",
        "abxy/entity.js",
        "abxy/entity2d.js",
        "abxy/sprite.js",
        "abxy/spritesheet2d.js",
        "abxy/key.js",
        "abxy/sound.js",
    ],
    tests: [
        "test/*-test.js"
    ]
}
