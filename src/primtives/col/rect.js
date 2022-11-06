import TriangleFifteen from "../../formats/triangleFifteen.js";
export default function rect(x1, y1, x2, y2, x3, y3, clr) {
    const ret = [];
    const tri1 = new TriangleFifteen(x1, y1, x2, y2, x3, y3, clr);
    const tri2 = new TriangleFifteen(x3, y3, x1, y3, x1, y1, clr);
    ret.push(tri1);
    ret.push(tri2);
    return ret;
}
