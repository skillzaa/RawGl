import VAO from "./vao.js";
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
    constructor(gl: WebGL2RenderingContext, x?: number, y?: number, width?: number, height?: number);
    private init;
    update(gl: WebGL2RenderingContext): void;
    draw(gl: WebGL2RenderingContext): void;
    setVertices(ver: VAO): void;
    setBgVertices(verBg: VAO): void;
}
//# sourceMappingURL=coreTriContainer-corrupt.d.ts.map