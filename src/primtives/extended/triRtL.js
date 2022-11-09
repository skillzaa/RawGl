import TriangleData from "../triangleData.js";
export default function triRtL(x, y, width, height) {
    const ret = [];
    const tri1 = new TriangleData(x, y, x - width, y, x - width, y + height);
    ret.push(tri1);
    return ret;
}
