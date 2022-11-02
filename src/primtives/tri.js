import TriangleFifteen from "./triangleFifteen.js";
export default function tri(x1, y1, x2, y2, x3, y3, clr) {
    const ret = [];
    const tri1 = new TriangleFifteen(x1, y1, x2, y2, x3, y3, clr);
    ret.push(tri1);
    return ret;
}
