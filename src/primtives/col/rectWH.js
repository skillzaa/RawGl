import TriangleData from "../triangleData.js";
export default function rectWH(x, y, width, height) {
    const ret = [];
    const tri1 = new TriangleData(x, y, x + width, y, x + width, y + height);
    const tri2 = new TriangleData(x + width, y + height, x, y + height, x, y);
    ret.push(tri1);
    ret.push(tri2);
    return ret;
}
