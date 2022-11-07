import Primitive from "../primtives/primitives.js";
import upload515ToTriCont from "../formats/upload515ToTriCont.js";
export default class Add {
    constructor(theComp) {
        this.theComp = theComp;
    }
    tri(x1, y1, x2, y2, x3, y3, clr) {
        const t = Primitive.tri(x1, y1, x2, y2, x3, y3, clr);
        this.upload(t);
    }
    diagonal(x1, y1, x2, y2, lineWidth, clr) {
        const t = Primitive.diagonal(x1, y1, x2, y2, lineWidth, clr);
        this.upload(t);
    }
    rect(x1, y1, x2, y2, x3, y3, clr) {
        const t = Primitive.rect(x1, y1, x2, y2, x3, y3, clr);
        this.upload(t);
    }
    rectWH(x, y, width, height, clr) {
        const t = Primitive.rectWH(x, y, width, height, clr);
        this.upload(t);
    }
    polygon(x = 50, y = 50, width = 10, height = 20, steps = 60, clr) {
        const t = Primitive.polygon(x, y, width, height, steps, clr);
        this.upload(t);
    }
    upload(tri) {
        upload515ToTriCont(tri, this.theComp);
    }
}
