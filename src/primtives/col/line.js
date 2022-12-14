import TriangleData from "../triangleData.js";
import Point from "../../core/pointFns/vertex.js";
import lerp from "../../core/pointFns/lerp.js";
export default function line(x1, y1, x2, y2, width = 5, height = 5, gap = 1) {
    if (gap < 1) {
        throw new Error("gap value can not be less than 1");
    }
    gap = gap / 100;
    const p1 = new Point(x1, y1);
    const p2 = new Point(x2, y2);
    const ret = [];
    for (let t = 0; t < 1; t += gap) {
        const x = lerp(p1.x, p2.x, t);
        const y = lerp(p1.y, p2.y, t);
        const tri1 = new TriangleData(x, y, x + width, y, x + width, y + height);
        const tri2 = new TriangleData(x + width, y + height, x, y + height, x, y);
        ret.push(tri1);
        ret.push(tri2);
    }
    return ret;
}
