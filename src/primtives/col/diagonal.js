import TriangleFifteen from "../triangleFifteen.js";
export default function diagonal(x1, y1, x2, y2, lineWidth, clr) {
    const ret = [];
    const tri1 = new TriangleFifteen(x1, (y1 + lineWidth), x1, (y1 - lineWidth), x2, (y2 - lineWidth), clr);
    const tri2 = new TriangleFifteen(x2, (y2 - lineWidth), x2, (y2 + lineWidth), x1, (y1 + lineWidth), clr);
    ret.push(tri1);
    ret.push(tri2);
    return ret;
}
