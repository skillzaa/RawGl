import TriangleFifteen from "../../formats/triangleFifteen.js";
export default function triRtR(x1, y1, width, height, clr) {
    const ret = [];
    const tri1 = new TriangleFifteen(x1, y1, x1 + width, y1, x1 + width, y1 + height, clr);
    ret.push(tri1);
    return ret;
}
