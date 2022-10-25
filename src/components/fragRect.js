import Triangle from "./coreTriComp.js";
export default class FragRect {
    constructor(rgbaObj, x, y, width, height) {
        this.tri1 = new Triangle(rgbaObj);
        this.tri1.addVertex(x, y);
        this.tri1.addVertex(x + width, y);
        this.tri1.addVertex(x, y + height);
        this.tri1.addVertex(x + width, y + height);
        this.tri1.addVertex(x, y + height);
        this.tri1.addVertex(x + width, y);
    }
    init(gl, fragStr) {
        this.tri1.init(gl, fragStr);
    }
    draw(gl) {
        this.tri1.draw(gl);
    }
}
