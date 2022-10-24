import RgbaObj from "../functions/rgbaObj.js";
export default class BaseCompGl {
    private program;
    private vertexPosBuffer;
    private vertices;
    private rgba;
    constructor(gl: WebGLRenderingContext, rgba: RgbaObj, verShaderStr: string, fragShaderStr: string);
    draw(gl: WebGLRenderingContext): void;
    private getBuffer;
    private getProgram;
    private createShader;
}
//# sourceMappingURL=BaseCompGl.d.ts.map