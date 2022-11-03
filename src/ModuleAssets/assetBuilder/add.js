import tri from "../../primtives/col/tri.js";
export default class Add {
    constructor() {
        this.triangles = [];
    }
    tri(x1, y1, x2, y2, x3, y3, clr) {
        const t = tri(x1, y1, x2, y2, x3, y3, clr);
        this.triangles = this.triangles.concat(t);
    }
    getDb() {
        return this.triangles;
    }
}
