import RgbaObj from "../functions/rgbaObj.js";
export default class CoreTriComp {
    drawMode: "triangles" | "lines" | "points";
    width: number;
    height: number;
    x: number;
    y: number;
    private program;
    private vertexPosBuffer;
    private rotateX;
    private rotateY;
    private vertices;
    rgba: RgbaObj;
    constructor(rgba: RgbaObj, x?: number, y?: number, width?: number, height?: number);
    addVertex(x: number, y: number, r?: number, g?: number, b?: number): void;
    addTri(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, r?: number, g?: number, b?: number): void;
    setColor(rgba: RgbaObj): void;
    init(gl: WebGLRenderingContext): void;
    private getBuffer;
    getProgram(gl: WebGLRenderingContext, vshader: WebGLShader, fshader: WebGLShader): WebGLProgram;
    linkNuseProgram(gl: WebGLRenderingContext, prgrm: WebGLProgram): void;
    createShader(gl: WebGLRenderingContext, shaderSource: string, shaderType: number): WebGLShader;
    bindBuffer(gl: WebGLRenderingContext, buff: WebGLBuffer, buffData: number[]): void;
    draw(gl: WebGLRenderingContext, linkedPrgrm: WebGLProgram): void;
}
//# sourceMappingURL=MetalComp.d.ts.map