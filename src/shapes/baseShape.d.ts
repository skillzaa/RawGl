import CoreTriComp from "../engine/coreTriComp.js";
import RgbaObj from "../functions/rgbaObj.js";
export default class BaseShape {
    protected coreTri: CoreTriComp;
    constructor(rgbaObj?: RgbaObj, x?: number, y?: number, width?: number, height?: number);
    init(gl: WebGLRenderingContext): void;
    draw(gl: WebGLRenderingContext): void;
}
//# sourceMappingURL=baseShape.d.ts.map