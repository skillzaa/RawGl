export default class CoreTriContainer {
    private vertices;
    private buffer;
    private u_xLoc;
    private u_yLoc;
    private u_widthLoc;
    private u_heightLoc;
    x: number;
    y: number;
    width: number;
    height: number;
    r: number;
    g: number;
    b: number;
    private program;
    constructor(x?: number, y?: number, width?: number, height?: number, r?: number, g?: number, b?: number);
    update(gl: WebGL2RenderingContext): void;
    init(gl: WebGL2RenderingContext): void;
    addTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, r?: number, g?: number, b?: number): void;
    protected getProgram(): WebGLProgram;
    draw(gl: WebGL2RenderingContext): void;
    protected setAttribute(gl: WebGL2RenderingContext, nameStr: string, numberOfComps: number, stride: number, offset?: number): void;
    protected getUniformLocation(gl: WebGL2RenderingContext, uniformName: string): WebGLUniformLocation;
}
//# sourceMappingURL=coreTriContainer.d.ts.map