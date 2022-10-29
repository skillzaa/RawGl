import Tri from "../coreComps/coreTri.js";
export default class BaseAssetComp {
    constructor(engine, x = 50, y = 50, width = 30, height = 20, r = 0, g = 0, b = 0) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.r = r;
        this.g = g;
        this.b = b;
        this.tri = new Tri(x, y, x + width, y, x + width, y + height, r, g, b);
    }
    draw(gl) {
        this.tri.draw(gl);
    }
    localX(xPerc) {
        return (this.width / 100) * xPerc;
    }
    localY(yPerc) {
        return (this.height / 100) * yPerc;
    }
}
