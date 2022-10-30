export default class CoreTri {
    private vertices;
    private buffer;
    private colorLoc;
    r: number;
    g: number;
    b: number;
    private program;
    private vertexShaderSrc;
    private fragShaderSrc;
    constructor(r?: number, g?: number, b?: number);
    init(gl: WebGL2RenderingContext): void;
    addTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
    protected getProgram(): WebGLProgram;
    update(gl: WebGL2RenderingContext): void;
    draw(gl: WebGL2RenderingContext): void;
    protected setAttribute(gl: WebGL2RenderingContext, nameStr: string, numberOfComps: number, stride: number, offset?: number): void;
    protected getUniformLocation(gl: WebGL2RenderingContext, uniformName: string): WebGLUniformLocation;
}
//# sourceMappingURL=coreTri.d.ts.map