import Engine from "../core/rawGl.js";
export default class TriFan {
    vertices: number[];
    private u_ptSizeLoc;
    private ptSize;
    private vertexShaderSrc;
    private fragShaderSrc;
    constructor();
    init(engine: Engine): void;
    addVertex(x?: number, y?: number, r?: number, g?: number, b?: number, a?: number): void;
    draw(gl: WebGL2RenderingContext): void;
}
//# sourceMappingURL=triFan.d.ts.map