import Engine from "../core/rawGl.js";
export default class CoreTri {
    vertices: number[];
    private u_ColorLoc;
    private vertexShaderSrc;
    private fragShaderSrc;
    r: number;
    g: number;
    b: number;
    a: number;
    constructor(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, r?: number, g?: number, b?: number, a?: number);
    init(engine: Engine): void;
    addVertex(x?: number, y?: number): void;
    draw(gl: WebGL2RenderingContext): void;
}
//# sourceMappingURL=tri.d.ts.map