import TriangleFifteen from "../triangleFifteen.js";
export default function rectWH(x, y, width, height, clr) {
    const ret = [];
    const tri1 = new TriangleFifteen(x, y, x + width, y, x + width, y + height, clr);
    const tri2 = new TriangleFifteen(x + width, y + height, x, y + height, x, y, clr);
    ret.push(tri1);
    ret.push(tri2);
    return ret;
}
