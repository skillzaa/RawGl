import IGPUComp from "./IGPUComp.js";
export default class CorePoint implements IGPUComp {
    protected vertices: number[];
    protected buffer: WebGLBuffer | null;
    protected program: WebGLProgram | null;
    constructor(vertices?: number[]);
    setData(vertices: number[]): void;
    update(gl: WebGL2RenderingContext): void;
    addPoint(x: number, y: number, width?: number, r?: number, g?: number, b?: number): void;
    draw(gl: WebGL2RenderingContext): void;
}
//# sourceMappingURL=corePoint.d.ts.map