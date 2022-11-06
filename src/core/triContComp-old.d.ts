import BaseTriComp from "./baseTriComp.js";
export default class TriContComp extends BaseTriComp {
    private u_xLoc;
    private u_yLoc;
    private u_widthLoc;
    private u_heightLoc;
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x?: number, y?: number, width?: number, height?: number);
    addTri(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, r?: number, g?: number, b?: number): void;
    init(gl: WebGL2RenderingContext): void;
    update(gl: WebGL2RenderingContext): void;
}
//# sourceMappingURL=triContComp-old.d.ts.map