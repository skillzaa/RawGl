import RgbaObj from "../functions/rgbaObj.js";
import IGLEngineComp from "./IGLEngineComp.js";
import ClrLoop from "../functions/clrLoop.js";
export default class T2P implements IGLEngineComp {
    readonly x: number;
    readonly y: number;
    readonly radius: number;
    clrLoop: ClrLoop;
    readonly startAngle: number;
    readonly endAngle: number;
    readonly steps: number;
    readonly stepSlice: number;
    readonly rgba: RgbaObj;
    private tris;
    constructor(gl: WebGLRenderingContext, rgbaObj: RgbaObj, x?: number, y?: number, radius?: number, steps?: number, startAngle?: number, endAngle?: number);
    private getCircleTri;
    draw(gl: WebGLRenderingContext): void;
}
//# sourceMappingURL=t2p.d.ts.map