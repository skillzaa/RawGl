import TriangleData from "../triangleData.js";
export default function diagonal(x1, y1, x2, y2, lineWidth) {
    const ret = [];
    const tri1 = new TriangleData(x1, (y1 + lineWidth), x1, (y1 - lineWidth), x2, (y2 - lineWidth));
    const tri2 = new TriangleData(x2, (y2 - lineWidth), x2, (y2 + lineWidth), x1, (y1 + lineWidth));
    ret.push(tri1);
    ret.push(tri2);
    return ret;
}
