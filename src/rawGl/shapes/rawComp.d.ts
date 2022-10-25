import RgbaObj from "../../functions/rgbaObj.js";
export default class RawComp {
    private program;
    private vertexPosBuffer;
    private vertices;
    rgba: RgbaObj;
    constructor(rgba: RgbaObj);
    addVertex(x: number, y: number): void;
    setColor(rgba: RgbaObj): void;
    init(gl: WebGLRenderingContext, fragShaderStr: string): void;
    private getBuffer;
    private getProgram;
    draw(gl: WebGLRenderingContext): void;
    private createShader;
}
//# sourceMappingURL=rawComp.d.ts.map