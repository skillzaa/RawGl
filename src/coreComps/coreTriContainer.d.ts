export default class CoreTriContainer {
    vertices: number[];
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
    init(gl: WebGL2RenderingContext): void;
    update(gl: WebGL2RenderingContext): void;
    draw(gl: WebGL2RenderingContext): void;
}
//# sourceMappingURL=coreTriContainer.d.ts.map