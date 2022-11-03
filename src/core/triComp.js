import BaseTriComp from "./baseTriComp.js";
import perc2glCoord from "./functions/perc2glCoord.js";
export default class TriComp extends BaseTriComp {
    constructor() {
        super();
    }
    addTri(x1, y1, x2, y2, x3, y3, r = 1, g = 0, b = 0) {
        x1 = perc2glCoord(x1);
        y1 = perc2glCoord(y1);
        x2 = perc2glCoord(x2);
        y2 = perc2glCoord(y2);
        x3 = perc2glCoord(x3);
        y3 = perc2glCoord(y3);
        super.addTri(x1, y1, x2, y2, x3, y3, r, g, b);
    }
}
