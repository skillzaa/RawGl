export default class BaseGPUComp {
    vertices: number[];
    private buffer;
    private program;
    constructor(x?: number, y?: number);
    addTri(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, r?: number, g?: number, b?: number): void;
    init(gl: WebGL2RenderingContext): void;
    draw(gl: WebGL2RenderingContext): void;
}
//# sourceMappingURL=baseGPUComp.d.ts.map