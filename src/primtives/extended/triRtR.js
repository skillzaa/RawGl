import TriangleData from "../triangleData.js";
export default function triRtR(x1, y1, width, height) {
    const ret = [];
    const tri1 = new TriangleData(x1, y1, x1 + width, y1, x1 + width, y1 + height);
    ret.push(tri1);
    return ret;
}
