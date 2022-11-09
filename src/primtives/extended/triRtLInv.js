import TriangleData from "../triangleData.js";
export default function triRtLInv(x, y, width, height) {
    const ret = [];
    const tri1 = new TriangleData(x, y, x, y + height, x + width, y + height);
    ret.push(tri1);
    return ret;
}
