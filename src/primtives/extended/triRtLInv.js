import TriangleFifteen from "../triangleFifteen.js";
export default function triRtLInv(x, y, width, height, clr) {
    const ret = [];
    const tri1 = new TriangleFifteen(x, y, x, y + height, x + width, y + height, clr);
    ret.push(tri1);
    return ret;
}
