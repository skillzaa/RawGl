export default class TriContainer {
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
    constructor(x?: number, y?: number, width?: number, height?: number);
    private addTri;
    init(gl: WebGL2RenderingContext): void;
    update(gl: WebGL2RenderingContext): void;
    draw(gl: WebGL2RenderingContext): void;
}
//# sourceMappingURL=triContainer.d.ts.map