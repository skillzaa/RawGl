import Rgba from "../../functions/rgba.js";
export default class Triangle {
    private program;
    private vertexPosBuffer;
    private vertices;
    constructor(gl: WebGLRenderingContext, vertices: number[], rgba: Rgba);
    private getBuffer;
    private getProgram;
    private setVertexPosition;
    draw(gl: WebGLRenderingContext): void;
    private createShader;
}
//# sourceMappingURL=triangle.d.ts.map