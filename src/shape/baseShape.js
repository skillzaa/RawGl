import CoreTriComp from "../engine/coreTriComp.js";
import rgba from "../functions/rgba.js";
import fragShaderFirst from "../shaders/frag/fragShaderFirst.js";
export default class BaseShape {
    constructor(rgbaObj = rgba(1, 1, 1, 1), x = 50, y = 50, width = 40, height = 20) {
        this.coreTri = new CoreTriComp(rgbaObj, x, y, width, height);
    }
    addVertex(x, y) {
        this.coreTri.addVertex(x, y);
    }
    addTri(x1, y1, x2, y2, x3, y3) {
        this.coreTri.addTri(x1, y1, x2, y2, x3, y3);
    }
    init(gl) {
        this.coreTri.init(gl, fragShaderFirst(this.coreTri.rgba.r, this.coreTri.rgba.g, this.coreTri.rgba.b, this.coreTri.rgba.a));
    }
    draw(gl) {
        this.coreTri.draw(gl);
    }
}
