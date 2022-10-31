import TriangleFifteen from "./triangleFifteen.js";
export default class FiveFifteenDb {
    constructor() {
        this.triangles = [];
    }
    addTri(x1, y1, x2, y2, x3, y3, clr) {
        const tri = new TriangleFifteen(x1, y1, x2, y2, x3, y3, clr);
        this.triangles.push(tri);
    }
    addRect(x, y, width = 30, height = 20, clr) {
        this.addTri(x, y, x + width, y, x + width, y + height, clr);
        this.addTri(x + width, y + height, x, y + height, x, y, clr);
    }
    addRectVer(x1, y1, x2, y2, x3, y3, x4, y4, clr) {
        this.addTri(x1, y1, x2, y2, x3, y3, clr);
        this.addTri(x3, y3, x2, y2, x1, y1, clr);
    }
    addDiagonal(y1 = 0, y2 = 100, lineWidth = 4, clr) {
        this.addTri(0, y1 - lineWidth, 0, y1, 100, y2, clr);
        this.addTri(100, y2, 100, y2 - lineWidth, 0, y1 - lineWidth, clr);
    }
    uploadData(ctc) {
        for (let i = 0; i < this.triangles.length; i++) {
            const t = this.triangles[i];
            ctc.addTri(t.x1(), t.y1(), t.x2(), t.y2(), t.x3(), t.y3(), t.r(), t.g(), t.b());
        }
        return ctc;
    }
}
