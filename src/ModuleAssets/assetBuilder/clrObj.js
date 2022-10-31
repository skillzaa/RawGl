export default class ClrObj {
    constructor(r = 0, g = 0, b = 0, a = 1) {
        this._r = r;
        this._g = g;
        this._b = b;
        this._a = a;
    }
    r() { return this._r; }
    g() { return this._g; }
    b() { return this._b; }
    a() { return this._a; }
    set(r = null, g = null, b = null, a = null) {
        if (r !== null) {
            this._r = r;
        }
        if (g !== null) {
            this._g = g;
        }
        if (b !== null) {
            this._b = b;
        }
        if (a !== null) {
            this._a = a;
        }
    }
}
