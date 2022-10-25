import CoreTriComp from "../engine/coreTriComp.js";
import rgba from "../functions/rgba.js";
import fragShaderFirst from "../shaders/frag/fragShaderFirst.js";
export default class Rectangle {
    constructor(rgbaObj = rgba(1, 1, 1, 1), x = 50, y = 50, width = 40, height = 20) {
        this.coreTri = new CoreTriComp(rgbaObj);
        this.coreTri.addVertex(x, y);
        this.coreTri.addVertex(x + width, y);
        this.coreTri.addVertex(x, y + height);
        this.coreTri.addVertex(x + width, y + height);
        this.coreTri.addVertex(x, y + height);
        this.coreTri.addVertex(x + width, y);
    }
    init(gl) {
        this.coreTri.init(gl, fragShaderFirst(0, 0, 1));
    }
    draw(gl) {
        this.coreTri.draw(gl);
    }
}
