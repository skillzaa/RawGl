export default class BaseCoreComp {
    private vertices;
    private buffer;
    private program;
    constructor();
    init(gl: WebGL2RenderingContext, vertexShaderSrc: string, fragShaderSrc: string): void;
    addTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
    protected getProgram(): WebGLProgram;
    update(gl: WebGL2RenderingContext): void;
    draw(gl: WebGL2RenderingContext): void;
    protected setAttribute(gl: WebGL2RenderingContext, nameStr: string, numberOfComps: number, stride: number, offset?: number): void;
    protected getUniformLocation(gl: WebGL2RenderingContext, uniformName: string): WebGLUniformLocation;
}
//# sourceMappingURL=baseCoreComp.d.ts.map