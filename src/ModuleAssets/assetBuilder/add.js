import Primitive from "../../primtives/primitive.js";
export default class Add {
    constructor() {
        this.triangles = [];
    }
    tri(x1, y1, x2, y2, x3, y3, clr) {
        const t = Primitive.tri(x1, y1, x2, y2, x3, y3, clr);
        this.triangles = this.triangles.concat(t);
    }
    diagonal(x1, y1, x2, y2, lineWidth, clr) {
        const t = Primitive.diagonal(x1, y1, x2, y2, lineWidth, clr);
        this.triangles = this.triangles.concat(t);
    }
    rect(x1, y1, x2, y2, x3, y3, clr) {
        const t = Primitive.rect(x1, y1, x2, y2, x3, y3, clr);
        this.triangles = this.triangles.concat(t);
    }
    rectWH(x, y, width, height, clr) {
        const t = Primitive.rectWH(x, y, width, height, clr);
        this.triangles = this.triangles.concat(t);
    }
    polygon(x = 50, y = 50, width = 10, height = 20, steps = 60, clr) {
        const t = Primitive.polygon(x, y, width, height, steps, clr);
        this.triangles = this.triangles.concat(t);
    }
    getDb() {
        return this.triangles;
    }
}
