import Primitive from "../primtives/primitives.js";
import TriangleDataWColor from "./triangleDataWColor.js";
export default class Add {
    constructor() {
        this.triangles = [];
    }
    tri(x1, y1, x2, y2, x3, y3, r = 0, g = 0, b = 0) {
        const t = Primitive.tri(x1, y1, x2, y2, x3, y3);
        this.save(t, r, g, b);
    }
    diagonal(x1, y1, x2, y2, lineWidth, r = 0, g = 0, b = 0) {
        const t = Primitive.diagonal(x1, y1, x2, y2, lineWidth);
        this.save(t, r, g, b);
    }
    rect(x1, y1, x2, y2, x3, y3, r = 0, g = 0, b = 0) {
        const t = Primitive.rect(x1, y1, x2, y2, x3, y3);
        this.save(t, r, g, b);
    }
    rectWH(x, y, width, height, r = 0, g = 0, b = 0) {
        const t = Primitive.rectWH(x, y, width, height);
        this.save(t, r, g, b);
    }
    polygon(x = 50, y = 50, width = 10, height = 20, steps = 60, r = 0, g = 0, b = 0) {
        const t = Primitive.polygon(x, y, width, height, steps);
        this.save(t, r, g, b);
    }
    getTriangles() {
        return this.triangles;
    }
    getNumbersArray() {
        const nmbrArr = [];
        for (let i = 0; i < this.triangles.length; i++) {
            const tri = this.triangles[i];
            nmbrArr.push(tri.x1());
            nmbrArr.push(tri.x2());
            nmbrArr.push(tri.y2());
            nmbrArr.push(tri.x3());
            nmbrArr.push(tri.y3());
            nmbrArr.push(tri.r());
            nmbrArr.push(tri.g());
            nmbrArr.push(tri.b());
        }
        return nmbrArr;
    }
    save(incommingTri, r, g, b) {
        for (let i = 0; i < incommingTri.length; i++) {
            const tri = incommingTri[i];
            const triWColor = new TriangleDataWColor(tri.x1(), tri.y1(), tri.x2(), tri.y2(), tri.x3(), tri.y3(), r, g, b);
            this.triangles.push(triWColor);
        }
    }
}
