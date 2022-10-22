import Triangle from "./triangle/triangle.js";
import rgba from "../functions/rgba.js";
import angle2rad from "../functions/angle2rad.js";
export default class Circle {
    constructor(gl, x = 50, y = 50, radius = 10, steps = 60) {
        this.tris = [];
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.steps = steps;
        this.stepSlice = (360 / steps);
        for (let i = 0; i < steps; i++) {
            const sangle = i * this.stepSlice;
            const eangle = sangle + this.stepSlice;
            this.getCircleTri(gl, sangle, eangle);
        }
    }
    getCircleTri(gl, startAngle = 0, endAngle = 20) {
        const x1 = this.radius * Math.cos(angle2rad(startAngle));
        const y1 = this.radius * Math.sin(angle2rad(startAngle));
        const x2 = this.radius * Math.cos(angle2rad(endAngle));
        const y2 = this.radius * Math.sin(angle2rad(endAngle));
        const tri = new Triangle(gl, this.x, this.y, this.x + x1, this.y + y1, this.x + x2, this.y + y2, rgba(0, 1));
        this.tris.push(tri);
    }
    draw(gl) {
        for (let i = 0; i < this.steps; i++) {
            this.tris[i].draw(gl);
        }
    }
}
