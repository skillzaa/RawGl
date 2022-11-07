import TriContCompBase from "../core/triContComp.js";
import Add from "./add.js";
export default class TriContComp {
    constructor(x = 25, y = 25, width = 50, height = 50) {
        this.theComp = new TriContCompBase(x, y, width, height);
        this.add = new Add(this.theComp);
    }
    getComp() {
        return this.theComp;
    }
    init(gl) {
        this.theComp.init(gl);
    }
    update(gl) {
        this.theComp.update(gl);
    }
    draw(gl) {
        this.theComp.draw(gl);
    }
    addTri(x1, y1, x2, y2, x3, y3, r, g, b) {
        this.theComp.addTri(x1, y1, x2, y2, x3, y3, r, g, b);
    }
}
