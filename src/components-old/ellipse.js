import Triangle from "./triangle/triangle.js";
import angle2rad from "../functions/angle2rad.js";
export default class Ellipse {
    constructor(gl, rgbaObj, x = 50, y = 50, width = 10, height = 20, steps = 60, startAngle = 0, endAngle = 360) {
        this.tris = [];
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        if (steps < 3) {
            throw new Error("steps can not be less than 3");
        }
        this.steps = steps;
        this.rgba = rgbaObj;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.stepSlice = (360 / steps);
        for (let i = 0; i < steps; i++) {
            const sangle = i * this.stepSlice;
            const eangle = sangle + this.stepSlice;
            this.getCircleTri(gl, sangle, eangle);
        }
    }
    getCircleTri(gl, startAngle = 0, endAngle = 20) {
        const x1 = this.width * Math.cos(angle2rad(startAngle));
        const y1 = (this.height) * Math.sin(angle2rad(startAngle));
        const x2 = this.width * Math.cos(angle2rad(endAngle));
        const y2 = (this.height) * Math.sin(angle2rad(endAngle));
        const tri = new Triangle(gl, this.rgba, this.x, this.y, this.x + x1, this.y + y1, this.x + x2, this.y + y2);
        this.tris.push(tri);
    }
    draw(gl) {
        for (let i = 0; i < this.steps; i++) {
            this.tris[i].draw(gl);
        }
    }
}
