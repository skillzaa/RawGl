import TriangleFifteen from "../triangleFifteen.js";
export default function ellipse(x = 50, y = 50, width = 10, height = 20, steps = 60, clr) {
    if (steps < 3) {
        throw new Error("steps can not be less than 3");
    }
    const stepSlice = (360 / steps);
    const ret = [];
    for (let i = 0; i < steps; i++) {
        const sangle = i * stepSlice;
        const eangle = sangle + stepSlice;
        const tri = getCircleTri(x, y, width, height, sangle, eangle, clr);
        ret.push(tri);
    }
    return ret;
}
function getCircleTri(x, y, width = 1, height = 1, startAngle = 0, endAngle = 20, clr) {
    const angle2rad = Math.PI / 180;
    const x1 = width * Math.cos(angle2rad * startAngle);
    const y1 = height * Math.sin(angle2rad * startAngle);
    const x2 = width * Math.cos(angle2rad * endAngle);
    const y2 = height * Math.sin(angle2rad * endAngle);
    const tri = new TriangleFifteen(x, y, x + x1, y + y1, x + x2, y + y2, clr);
    return tri;
}
