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
    private program;
    constructor(gl: WebGL2RenderingContext, x?: number, y?: number, width?: number, height?: number);
    addTriangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, r?: number, g?: number, b?: number): void;
    init(gl: WebGL2RenderingContext): void;
    update(gl: WebGL2RenderingContext): void;
    draw(gl: WebGL2RenderingContext): void;
}
//# sourceMappingURL=coreTriContainer.d.ts.map