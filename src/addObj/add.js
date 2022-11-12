import Primitive from "../primtives/primitives.js";
import TriangleDataWColor from "./triangleDataWColor.js";
import perc2glCoord from "./perc2glCoord.js";
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
    line(x1, y1, x2, y2, width = 5, height = 5, r = 0, g = 0, b = 0, gap = 1) {
        const t = Primitive.line(x1, y1, x2, y2, width, height, gap);
        this.save(t, r, g, b);
    }
    curveQuad(x1, y1, x2, y2, x3, y3, width = 5, height = 5, r = 0, g = 0, b = 0, gap = 1) {
        const t = Primitive.curveQuad(x1, y1, x2, y2, x3, y3, width, height, gap);
        this.save(t, r, g, b);
    }
    getTriangles() {
        return this.triangles;
    }
    get515Triangles() {
        const retNmbArr = [];
        for (let i = 0; i < this.triangles.length; i++) {
            const tri = this.triangles[i];
            retNmbArr.push(tri.x1());
            retNmbArr.push(tri.y1());
            retNmbArr.push(tri.r());
            retNmbArr.push(tri.g());
            retNmbArr.push(tri.b());
            retNmbArr.push(tri.x2());
            retNmbArr.push(tri.y2());
            retNmbArr.push(tri.r());
            retNmbArr.push(tri.g());
            retNmbArr.push(tri.b());
            retNmbArr.push(tri.x3());
            retNmbArr.push(tri.y3());
            retNmbArr.push(tri.r());
            retNmbArr.push(tri.g());
            retNmbArr.push(tri.b());
        }
        return retNmbArr;
    }
    get515TriGlCoords() {
        const retNmbArr = [];
        for (let i = 0; i < this.triangles.length; i++) {
            const tri = this.triangles[i];
            retNmbArr.push(perc2glCoord(tri.x1()));
            retNmbArr.push(perc2glCoord(tri.y1()));
            retNmbArr.push(tri.r());
            retNmbArr.push(tri.g());
            retNmbArr.push(tri.b());
            retNmbArr.push(perc2glCoord(tri.x2()));
            retNmbArr.push(perc2glCoord(tri.y2()));
            retNmbArr.push(tri.r());
            retNmbArr.push(tri.g());
            retNmbArr.push(tri.b());
            retNmbArr.push(perc2glCoord(tri.x3()));
            retNmbArr.push(perc2glCoord(tri.y3()));
            retNmbArr.push(tri.r());
            retNmbArr.push(tri.g());
            retNmbArr.push(tri.b());
        }
        return retNmbArr;
    }
    save(incommingTri, r, g, b) {
        for (let i = 0; i < incommingTri.length; i++) {
            const tri = incommingTri[i];
            const triWColor = new TriangleDataWColor(tri.x1(), tri.y1(), tri.x2(), tri.y2(), tri.x3(), tri.y3(), r, g, b);
            this.triangles.push(triWColor);
        }
    }
}
