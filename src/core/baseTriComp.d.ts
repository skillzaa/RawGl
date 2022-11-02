import IGPUComp from "./IGPUComp.js";
export default class BaseTriComp implements IGPUComp {
    protected vertices: number[];
    protected buffer: WebGLBuffer | null;
    protected program: WebGLProgram | null;
    constructor();
    addTri(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, r?: number, g?: number, b?: number): void;
    init(gl: WebGL2RenderingContext): void;
    update(gl: WebGL2RenderingContext): void;
    draw(gl: WebGL2RenderingContext): void;
}
//# sourceMappingURL=baseTriComp.d.ts.map