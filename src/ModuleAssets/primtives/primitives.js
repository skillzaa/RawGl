import TriangleFifteen from "../fiveFifteen/triangleFifteen.js";
export default class Primtives {
    rect(x1, y1, x2, y2, x3, y3, x4, y4, clr) {
        const ret = [];
        const tri1 = new TriangleFifteen(x1, y1, x2, y2, x3, y3, clr);
        const tri2 = new TriangleFifteen(x3, y3, x2, y2, x1, y1, clr);
        ret.push(tri1);
        ret.push(tri2);
        return ret;
    }
}
