import BaseTriComp from "./baseComp.js";
export default class TriContComp extends BaseTriComp {
    x: number;
    y: number;
    width: number;
    height: number;
    private u_xLoc;
    private u_yLoc;
    private u_widthLoc;
    private u_heightLoc;
    constructor(x?: number, y?: number, width?: number, height?: number);
    init(gl: WebGL2RenderingContext): void;
    update(gl: WebGL2RenderingContext): void;
}
//# sourceMappingURL=contComp.d.ts.map