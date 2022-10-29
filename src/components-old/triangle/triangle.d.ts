import RgbaObj from "../../functions/rgbaObj.js";
export default class Triangle {
    private program;
    private vertexPosBuffer;
    private vertices;
    constructor(gl: WebGLRenderingContext, rgba: RgbaObj, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number);
    private getBuffer;
    private getProgram;
    draw(gl: WebGLRenderingContext): void;
    private createShader;
}
//# sourceMappingURL=triangle.d.ts.map