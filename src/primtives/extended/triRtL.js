import TriangleFifteen from "../../formats/triangleFifteen.js";
export default function triRtL(x, y, width, height, clr) {
    const ret = [];
    const tri1 = new TriangleFifteen(x, y, x - width, y, x - width, y + height, clr);
    ret.push(tri1);
    return ret;
}
