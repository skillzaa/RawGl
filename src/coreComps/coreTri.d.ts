import Engine from "../core/rawGl.js";
export default class CoreTri {
    private vertices;
    private u_ColorLoc;
    private vertexShaderSrc;
    private fragShaderSrc;
    protected r: number;
    protected g: number;
    protected b: number;
    protected a: number;
    constructor(r?: number, g?: number, b?: number, a?: number);
    init(engine: Engine): void;
    addTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
    draw(gl: WebGL2RenderingContext): void;
}
//# sourceMappingURL=coreTri.d.ts.map