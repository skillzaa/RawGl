import Rectangle from "../components/rectangle.js";
import Triangle from "../components/triangle/triangle.js";
import Ellipse from "../components/ellipse.js";
export default class CompFactory {
    constructor(gl, comps) {
        this.gl = gl;
        this.comps = comps;
    }
    rectangle(rgbaObj, x, y, width, height) {
        const comp = new Rectangle(this.gl, rgbaObj, x, y, width, height);
        this.comps.push(comp);
        return comp;
    }
    triangle(rgba, x1, y1, x2, y2, x3, y3) {
        const comp = new Triangle(this.gl, rgba, x1, y1, x2, y2, x3, y3);
        this.comps.push(comp);
        return comp;
    }
    ellipse(rgbaObj, x = 50, y = 50, width = 10, height = 20, steps = 60, startAngle = 0, endAngle = 360) {
        const comp = new Ellipse(this.gl, rgbaObj, x, y, width, height, steps, startAngle, endAngle);
        this.comps.push(comp);
        return comp;
    }
}
