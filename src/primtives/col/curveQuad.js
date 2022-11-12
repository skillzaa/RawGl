import TriangleData from "../triangleData.js";
import Point from "../../core/pointFns/vertex.js";
import lerp from "../../core/pointFns/lerp.js";
export default function CurveQuad(x1, y1, x2, y2, x3, y3, width = 5, height = 5, gap = 1) {
    if (gap < 1) {
        throw new Error("gap value can not be less than 1");
    }
    gap = gap / 100;
    const p1 = new Point(x1, y1);
    const p2 = new Point(x2, y2);
    const p3 = new Point(x3, y3);
    const ret = [];
    for (let t = 0; t < 1; t += gap) {
        const x1Calc = lerp(p1.x, p2.x, t);
        const y1Calc = lerp(p1.y, p2.y, t);
        const x2Calc = lerp(p2.x, p3.x, t);
        const y2Calc = lerp(p2.y, p3.y, t);
        const x = lerp(x1Calc, x2Calc, t);
        const y = lerp(y1Calc, y2Calc, t);
        const tri1 = new TriangleData(x, y, x + width, y, x + width, y + height);
        const tri2 = new TriangleData(x + width, y + height, x, y + height, x, y);
        ret.push(tri1);
        ret.push(tri2);
    }
    return ret;
}
