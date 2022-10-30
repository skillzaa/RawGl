export default class CoreTriContainer {
    private vertices;
    private bgVertices;
    private buffer;
    private u_xLoc;
    private u_yLoc;
    private u_widthLoc;
    private u_heightLoc;
    x: number;
    y: number;
    width: number;
    height: number;
    private program;
    r: number;
    g: number;
    b: number;
    constructor(x?: number, y?: number, width?: number, height?: number, r?: number, g?: number, b?: number);
    update(gl: WebGL2RenderingContext): void;
    init(gl: WebGL2RenderingContext): void;
    protected getProgram(): WebGLProgram;
    draw(gl: WebGL2RenderingContext): void;
    protected setAttribute(gl: WebGL2RenderingContext, nameStr: string, numberOfComps: number, stride: number, offset?: number): void;
    protected getUniformLocation(gl: WebGL2RenderingContext, uniformName: string): WebGLUniformLocation;
}
//# sourceMappingURL=coreTriContainer.d.ts.map