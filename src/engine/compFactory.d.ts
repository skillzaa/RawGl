import IGLEngineComp from "../components/IGLEngineComp";
import Rectangle from "../components/rectangle.js";
import Triangle from "../components/triangle/triangle.js";
import Ellipse from "../components/ellipse.js";
import RgbaObj from "../functions/rgbaObj.js";
export default class CompFactory {
    private gl;
    private comps;
    constructor(gl: WebGLRenderingContext, comps: IGLEngineComp[]);
    rectangle(rgbaObj: RgbaObj, x: number, y: number, width: number, height: number): Rectangle;
    triangle(rgba: RgbaObj, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): Triangle;
    ellipse(rgbaObj: RgbaObj, x?: number, y?: number, width?: number, height?: number, steps?: number, startAngle?: number, endAngle?: number): Ellipse;
}
//# sourceMappingURL=compFactory.d.ts.map