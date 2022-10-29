import Engine from "../core/rawGl.js";
import Tri from "../coreComps/coreTri.js";
export default class BaseAssetComp {
    protected tri: Tri;
    protected readonly x: number;
    protected readonly y: number;
    protected readonly width: number;
    protected readonly height: number;
    protected readonly r: number;
    protected readonly g: number;
    protected readonly b: number;
    constructor(engine: Engine, x?: number, y?: number, width?: number, height?: number, r?: number, g?: number, b?: number);
    draw(gl: WebGL2RenderingContext): void;
    protected localX(xPerc: number): number;
    protected localY(yPerc: number): number;
}
//# sourceMappingURL=baseAssetComp.d.ts.map