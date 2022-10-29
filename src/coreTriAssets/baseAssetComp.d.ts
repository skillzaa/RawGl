import Engine from "../core/rawGl.js";
export default class BaseAsset {
    private tri;
    constructor(engine: Engine, x?: number, y?: number, width?: number, height?: number, r?: number, g?: number, b?: number);
    draw(gl: WebGL2RenderingContext): void;
}
//# sourceMappingURL=baseAssetComp.d.ts.map