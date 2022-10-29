import CoreTri from "../coreComps/coreTri.js";
import WhObj from "./whObj.js";
export default class FillRect extends CoreTri {
    constructor(x, y, width = 20, height = 20, r = 0, g = 0, b = 0) {
        super(r, g, b);
        const wh = new WhObj(x, y, width, height);
        this.addTriangle(wh.x, wh.y, wh.rightEdge(), wh.y, wh.x, wh.topEdge());
        this.addTriangle(wh.rightEdge(), wh.topEdge(), wh.x, wh.topEdge(), wh.x, wh.y);
    }
}
