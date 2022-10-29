import Tri from "../coreComps/coreTri.js";
export default class BaseAsset {
    constructor(engine, x = 50, y = 50, width = 30, height = 20, r = 0, g = 0, b = 0) {
        this.tri = new Tri(x, y, x + width, y, x + width, y + height, r, g, b);
        this.tri.addTriangle(x + width, y + height, x, y + height, x, y);
        this.tri.init(engine);
    }
    draw(engine, gl) { }
}
();
{
}
