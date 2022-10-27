import RgbaObj from "../functions/rgbaObj.js";
export default class CoreTriComp {
    drawMode: "triangles" | "lines" | "points";
    width: number;
    height: number;
    x: number;
    y: number;
    private program;
    private vertexPosBuffer;
    private vertices;
    rgba: RgbaObj;
    constructor(rgba: RgbaObj, x?: number, y?: number, width?: number, height?: number);
    addVertex(x: number, y: number): void;
    init(gl: WebGLRenderingContext): void;
    private getBuffer;
    private getProgram;
    draw(gl: WebGLRenderingContext): void;
    private createShader;
}
//# sourceMappingURL=coreTriComp.d.ts.map