import BaseTriComp from "./baseComp.js";
export default class CoreContainerComp extends BaseTriComp {
    x: number;
    y: number;
    width: number;
    height: number;
    private u_xLoc;
    private u_yLoc;
    private u_widthLoc;
    private u_heightLoc;
    constructor(x?: number, y?: number, width?: number, height?: number);
    update(gl: WebGL2RenderingContext): void;
}
//# sourceMappingURL=coreContainerComp.d.ts.map