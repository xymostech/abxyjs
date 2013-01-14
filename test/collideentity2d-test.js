buster.testCase("CollideEntity2d", {
    "rect-rect": function() {
        var a = new ABXY.CollideEntity2d(
            "rect1", 0, 0, new ABXY.Rect(0, 0, 5, 8)
        );
        var b = new ABXY.CollideEntity2d(
            "rect2", 0, 0, new ABXY.Rect(3, 3, 7, 2)
        );

        assert(a.CollidesWith(b));
        assert(b.CollidesWith(a));

        a.pos.x = 12;

        assert(!a.CollidesWith(b));
        assert(!b.CollidesWith(a));

        a.pos.x = -3;

        assert(!a.CollidesWith(b));
        assert(!b.CollidesWith(a));

        a.pos.x = 0;
        a.pos.y = 6;

        assert(!a.CollidesWith(b));
        assert(!b.CollidesWith(a));

        a.pos.y = -6;

        assert(!a.CollidesWith(b));
        assert(!b.CollidesWith(a));
    },

    "rect-circle": function() {
        var a = new ABXY.CollideEntity2d(
            "circle1", 0, 0, new ABXY.Circle(2, 3, 5)
        );
        var b = new ABXY.CollideEntity2d(
            "rect1", 0, 0, new ABXY.Rect(3, 3, 7, 2)
        );

        assert(a.CollidesWith(b));
        assert(b.CollidesWith(a));

        a.pos.x = -5;

        assert(!a.CollidesWith(b));
        assert(!b.CollidesWith(a));

        a.pos.x = 0;
        a.pos.y = -6;

        assert(!a.CollidesWith(b));
        assert(!b.CollidesWith(a));
    },
});
