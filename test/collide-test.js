buster.testCase("Collide", {
    "PointRect": function() {
        assert.equals(ABXY.Collide2d.PointRect(0, 0, -5, -5, 10, 10), true);

        assert.equals(ABXY.Collide2d.PointRect(0, 0, 0, -5, 10, 10), false);
        assert.equals(ABXY.Collide2d.PointRect(0, 0, -5, 0, 10, 10), false);
        assert.equals(ABXY.Collide2d.PointRect(0, 0, -5, -5, 5, 10), false);
        assert.equals(ABXY.Collide2d.PointRect(0, 0, -5, -5, 10, 5), false);

        assert.equals(ABXY.Collide2d.PointRect(7, 9, 1, 3, 8, 7), true);
        assert.equals(ABXY.Collide2d.PointRect(7, 9, 1, 3, 6, 6), false);
    },

    "PointCircle": function() {
        assert.equals(ABXY.Collide2d.PointCircle(0, 0, 3, 4, 5), false);
        assert.equals(ABXY.Collide2d.PointCircle(0, 0, 3, 4, 6), true);

        assert.equals(ABXY.Collide2d.PointCircle(10, 10, 5, -2, 13), false);
        assert.equals(ABXY.Collide2d.PointCircle(10, 10, 5, -2, 14), true);
    },

    "RectRect": function() {
        // low right corner
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, 9, 9, 10, 10), true);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, 10, 10, 10, 10), false);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, 11, 11, 10, 10), false);

        // high right corner
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, 9, -9, 10, 10), true);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, 10, -10, 10, 10), false);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, 11, -11, 10, 10), false);

        // high left corner
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, -9, -9, 10, 10), true);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, -10, -10, 10, 10), false);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, -11, -11, 10, 10), false);

        // low left corner
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, -9, 9, 10, 10), true);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, -10, 10, 10, 10), false);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, -11, 11, 10, 10), false);

        // right side
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, 9, 9, 10, 10), true);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, 10, 9, 10, 10), false);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, 11, 9, 10, 10), false);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, 9, -9, 10, 10), true);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, 10, -9, 10, 10), false);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, 11, -9, 10, 10), false);

        // left side
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, -9, 9, 10, 10), true);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, -10, 9, 10, 10), false);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, -11, 9, 10, 10), false);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, -9, -9, 10, 10), true);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, -10, -9, 10, 10), false);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, -11, -9, 10, 10), false);

        // top
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, 9, -9, 10, 10), true);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, 9, -10, 10, 10), false);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, 9, -11, 10, 10), false);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, -9, -9, 10, 10), true);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, -9, -10, 10, 10), false);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, -9, -11, 10, 10), false);

        // bottom
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, 9, 9, 10, 10), true);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, 9, 10, 10, 10), false);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, 9, 11, 10, 10), false);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, -9, 9, 10, 10), true);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, -9, 10, 10, 10), false);
        assert.equals(ABXY.Collide2d.RectRect(0, 0, 10, 10, -9, 11, 10, 10), false);

        // random other cases
        assert.equals(ABXY.Collide2d.RectRect(5, 8, 11, 6, 13, 4, 4, 3), false);
        assert.equals(ABXY.Collide2d.RectRect(5, 8, 11, 6, 13, 4, 4, 5), true);
        assert.equals(ABXY.Collide2d.RectRect(-14, -9, 7, 4, -20, -6, 5, 5), false);
        assert.equals(ABXY.Collide2d.RectRect(-16, -9, 7, 4, -20, -6, 5, 5), true);
    },

    "CircleCircle": function() {
        assert.equals(ABXY.Collide2d.CircleCircle(0, 0, 3, 4, 3, 2), false);
        assert.equals(ABXY.Collide2d.CircleCircle(0, 0, 3, 4, 3, 3), true);
        assert.equals(ABXY.Collide2d.CircleCircle(0, 0, 3, 3, 3, 2), true);

        assert.equals(ABXY.Collide2d.CircleCircle(6, 4, 3, 2, 1, 2), false);
        assert.equals(ABXY.Collide2d.CircleCircle(6, 4, 3, 2, 1, 3), true);
        assert.equals(ABXY.Collide2d.CircleCircle(6, 4, 3, 2, 2, 2), true);
    },

    "RectCircle": function() {
        // right
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, 14, 3, 3), false);
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, 14, 3, 4), false);
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, 14, 3, 5), true);

        // left
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, -4, 3, 3), false);
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, -4, 3, 4), false);
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, -4, 3, 5), true);

        // top
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, 6, -5, 4), false);
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, 6, -5, 5), false);
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, 6, -5, 6), true);

        // bottom
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, 6, 10, 4), false);
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, 6, 10, 5), false);
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, 6, 10, 6), true);

        // top left
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, -3, -4, 4), false);
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, -3, -4, 5), false);
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, -3, -4, 6), true);

        // top right
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, 13, -4, 4), false);
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, 13, -4, 5), false);
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, 13, -4, 6), true);

        // bottom left
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, -3, 9, 4), false);
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, -3, 9, 5), false);
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, -3, 9, 6), true);

        // bottom left
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, 13, 9, 4), false);
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, 13, 9, 5), false);
        assert.equals(ABXY.Collide2d.RectCircle(0, 0, 10, 5, 13, 9, 6), true);
    },

    "PointPolygon": function() {
        // CCW Square
        var square = [[0, 0], [5, 0], [5, 5], [0, 5]];
        assert.equals(ABXY.Collide2d.PointPolygon(2, 2, square), true);
        assert.equals(ABXY.Collide2d.PointPolygon(-2, 2, square), false);
        assert.equals(ABXY.Collide2d.PointPolygon(2, -2, square), false);
        assert.equals(ABXY.Collide2d.PointPolygon(7, 2, square), false);
        assert.equals(ABXY.Collide2d.PointPolygon(2, 7, square), false);

        // CW Square
        var square = [[0, 0], [0, 5], [5, 5], [5, 0]];
        assert.equals(ABXY.Collide2d.PointPolygon(2, 2, square, false), true);
        assert.equals(ABXY.Collide2d.PointPolygon(-2, 2, square, false), false);
        assert.equals(ABXY.Collide2d.PointPolygon(2, -2, square, false), false);
        assert.equals(ABXY.Collide2d.PointPolygon(7, 2, square, false), false);
        assert.equals(ABXY.Collide2d.PointPolygon(2, 7, square, false), false);

        // CCW Triangle
        var triangle = [[0, 0], [5, 0], [3, 5]];
        assert.equals(ABXY.Collide2d.PointPolygon(2, 2, triangle), true);
        assert.equals(ABXY.Collide2d.PointPolygon(2, -2, triangle), false);
        assert.equals(ABXY.Collide2d.PointPolygon(5, 5, triangle), false);
        assert.equals(ABXY.Collide2d.PointPolygon(0, 5, triangle), false);
    },
});
