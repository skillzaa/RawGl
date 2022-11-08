import Primitive from "../primtives/primitives.js";
import getClrObj from "../color/getClrObj.js";
import upload515ToTriCont from "../formats/upload515ToTriCont.js";
export default class Add {
    constructor(theComp) {
        this.theComp = theComp;
    }
    tri(x1, y1, x2, y2, x3, y3, r = 0, g = 0, b = 0) {
        const t = Primitive.tri(x1, y1, x2, y2, x3, y3, getClrObj(r, g, b));
        this.upload(t);
    }
    diagonal(x1, y1, x2, y2, lineWidth, r = 0, g = 0, b = 0) {
        const t = Primitive.diagonal(x1, y1, x2, y2, lineWidth, getClrObj(r, g, b));
        this.upload(t);
    }
    rect(x1, y1, x2, y2, x3, y3, r = 0, g = 0, b = 0) {
        const t = Primitive.rect(x1, y1, x2, y2, x3, y3, getClrObj(r, g, b));
        this.upload(t);
    }
    rectWH(x, y, width, height, r = 0, g = 0, b = 0) {
        const t = Primitive.rectWH(x, y, width, height, getClrObj(r, g, b));
        this.upload(t);
    }
    polygon(x = 50, y = 50, width = 10, height = 20, steps = 60, r = 0, g = 0, b = 0) {
        const t = Primitive.polygon(x, y, width, height, steps, getClrObj(r, g, b));
        this.upload(t);
    }
    upload(tri) {
        upload515ToTriCont(tri, this.theComp);
    }
}
