import TriangleFifteen from "./triangleFifteen.js";
import rect from "../primtives/rect.js";
export default class FiveFifteenDb {
    constructor() {
        this.triangles = [];
    }
    tri(x1, y1, x2, y2, x3, y3, clr) {
        const tri = new TriangleFifteen(x1, y1, x2, y2, x3, y3, clr);
        this.triangles.push(tri);
    }
    rectWH(x, y, width = 30, height = 20, clr) {
        this.tri(x, y, x + width, y, x + width, y + height, clr);
        this.tri(x + width, y + height, x, y + height, x, y, clr);
    }
    rect(x1, y1, x2, y2, x3, y3, clr) {
        const r = rect(x1, y1, x2, y2, x3, y3, clr);
        this.triangles = this.triangles.concat(r);
    }
    diagonal(y1 = 0, y2 = 100, lineWidth = 4, clr) {
        this.tri(0, y1, 0, y1 - lineWidth, 100, y2, clr);
        this.tri(100, y2, 100, y2 - lineWidth, 0, y1 - lineWidth, clr);
    }
    uploadData(ctc) {
        for (let i = 0; i < this.triangles.length; i++) {
            const t = this.triangles[i];
            ctc.addTri(t.x1(), t.y1(), t.x2(), t.y2(), t.x3(), t.y3(), t.r(), t.g(), t.b());
        }
        return ctc;
    }
}
