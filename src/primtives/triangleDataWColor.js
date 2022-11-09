export default class TriangleData {
    constructor(x1, y1, x2, y2, x3, y3, r = 0, g = 0, b = 0) {
        this._x1 = x1;
        this._y1 = y1;
        this._x2 = x2;
        this._y2 = y2;
        this._x3 = x3;
        this._y3 = y3;
        this._r = r;
        this._g = g;
        this._b = b;
    }
    x1() { return this._x1; }
    y1() { return this._y1; }
    x2() { return this._x2; }
    y2() { return this._y2; }
    x3() { return this._x3; }
    y3() { return this._y3; }
    r() { return this._r; }
    g() { return this._g; }
    b() { return this._b; }
    wOColor() {
        return [
            this.x1(),
            this.y1(),
            this.x2(),
            this.y2(),
            this.x3(),
            this.y3(),
        ];
    }
}
