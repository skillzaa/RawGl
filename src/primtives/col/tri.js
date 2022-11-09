import TriangleData from "../triangleData.js";
export default function tri(x1, y1, x2, y2, x3, y3) {
    const ret = [];
    const tri1 = new TriangleData(x1, y1, x2, y2, x3, y3);
    ret.push(tri1);
    return ret;
}
