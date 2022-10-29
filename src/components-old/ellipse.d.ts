import RgbaObj from "../functions/rgbaObj.js";
import IGLEngineComp from "./IGLEngineComp.js";
export default class Ellipse implements IGLEngineComp {
    readonly width: number;
    readonly height: number;
    readonly x: number;
    readonly y: number;
    readonly startAngle: number;
    readonly endAngle: number;
    readonly steps: number;
    readonly stepSlice: number;
    readonly rgba: RgbaObj;
    private tris;
    constructor(gl: WebGLRenderingContext, rgbaObj: RgbaObj, x?: number, y?: number, width?: number, height?: number, steps?: number, startAngle?: number, endAngle?: number);
    private getCircleTri;
    draw(gl: WebGLRenderingContext): void;
}
//# sourceMappingURL=ellipse.d.ts.map