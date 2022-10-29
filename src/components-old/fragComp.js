import Triangle from "./triangle/triangle.js";
export default class FragComp {
    constructor(gl, rgbaObj, x, y, width, height) {
        this.tri1 = new Triangle(gl, rgbaObj, x, y, x + width, y, x, y + height);
        this.tri2 = new Triangle(gl, rgbaObj, x + width, y + height, x, y + height, x + width, y);
    }
    draw(gl) {
        this.tri1.draw(gl);
        this.tri2.draw(gl);
    }
}
