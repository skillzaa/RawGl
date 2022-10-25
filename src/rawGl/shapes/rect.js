import RawComp from "./rawComp.js";
import rgba from "../../functions/rgba.js";
import fragShaderFirst from "../../shaders/frag/fragShaderFirst.js";
export default class Rectangle {
    constructor(rgbaObj = rgba(1, 1, 1, 1), x = 50, y = 50, width = 40, height = 20) {
        this.rawComp = new RawComp(rgbaObj);
        this.rawComp.addVertex(x, y);
        this.rawComp.addVertex(x + width, y);
        this.rawComp.addVertex(x, y + height);
        this.rawComp.addVertex(x + width, y + height);
        this.rawComp.addVertex(x, y + height);
        this.rawComp.addVertex(x + width, y);
    }
    init(gl) {
        this.rawComp.init(gl, fragShaderFirst(0, 0, 1));
    }
    draw(gl) {
        this.rawComp.draw(gl);
    }
}
