import TriangleData from "../triangleData.js";
import Point from "../../core/pointFns/vertex.js";
import lerp from "../../core/pointFns/lerp.js";
export default function Line(x1, y1, x2, y2, gap = 0.01, width = 5, height = 5) {
    const p1 = new Point(x1, y1);
    const p2 = new Point(x2, y2);
    const ret = [];
    for (let t = 0; t <= 1; t += gap) {
        const x = lerp(p1.x, p2.x, t);
        const y = lerp(p1.y, p2.y, t);
        const tri1 = new TriangleData(x, y, x + width, y, x + width, y + height);
        const tri2 = new TriangleData(x + width, y + height, x, y + height, x, y);
    }
    return ret;
}
