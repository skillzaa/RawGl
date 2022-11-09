import TriangleData from "../triangleData.js";
export default function rect(x1, y1, x2, y2, x3, y3) {
    const ret = [];
    const tri1 = new TriangleData(x1, y1, x2, y2, x3, y3);
    const tri2 = new TriangleData(x3, y3, x1, y3, x1, y1);
    ret.push(tri1);
    ret.push(tri2);
    return ret;
}
