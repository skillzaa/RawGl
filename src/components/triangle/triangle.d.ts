import Rgba from "../../functions/rgba.js";
export default class Triangle {
    private program;
    private vertexPosBuffer;
    private vertices;
    constructor(gl: WebGLRenderingContext, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, rgba: Rgba);
    private getBuffer;
    private getProgram;
    draw(gl: WebGLRenderingContext): void;
    private createShader;
}
//# sourceMappingURL=triangle.d.ts.map