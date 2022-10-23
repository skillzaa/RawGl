import rgba from "./rgba.js";
export default class ClrLoop {
    constructor() {
        this.counter = 0;
        this.loop = [];
    }
    clear() {
        this.loop.length = 0;
    }
    addRgba(r = 0, g = 0, b = 0, a = 1) {
        this.loop.push(rgba(r, g, b, a));
    }
    nextRgba() {
        if (this.loop.length == 0) {
            throw new Error("no color added in the color loop");
        }
        if (this.counter >= this.loop.length) {
            this.counter = 0;
        }
        const r = this.loop[this.counter];
        this.counter += 1;
        return r;
    }
}
