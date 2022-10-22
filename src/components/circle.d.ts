import IGLEngineComp from "./IGLEngineComp.js";
export default class Circle implements IGLEngineComp {
    readonly radius: number;
    readonly x: number;
    readonly y: number;
    readonly steps: number;
    readonly stepSlice: number;
    private tris;
    constructor(gl: WebGLRenderingContext, x?: number, y?: number, radius?: number, steps?: number);
    private getCircleTri;
    draw(gl: WebGLRenderingContext): void;
}
//# sourceMappingURL=circle.d.ts.map