import IGPUComp from "../core/IGPUComp.js";
export default class CoreFragComp implements IGPUComp {
    protected vertices: number[];
    protected buffer: WebGLBuffer | null;
    protected program: WebGLProgram | null;
    constructor(vertices?: number[]);
    setData(vertices: number[]): void;
    update(gl: WebGL2RenderingContext): void;
    draw(gl: WebGL2RenderingContext): void;
}
//# sourceMappingURL=coreFragComp.d.ts.map