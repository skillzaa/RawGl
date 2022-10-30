import CoreTri from "../core/coreComps/coreTri.js";
import WhObj from "../core/coreComps/whObj.js.js";
export default class FillRect extends CoreTri {
    constructor(x, y, width = 20, height = 20, r = 0, g = 0, b = 0) {
        super(r, g, b);
        const wh = new WhObj(x, y, width, height);
        this.addTriangle(wh.xPerc(0), wh.yPerc(0), wh.xPerc(100), wh.yPerc(0), wh.xPerc(100), wh.yPerc(100));
    }
}
