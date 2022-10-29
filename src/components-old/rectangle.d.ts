import IGLEngineComp from "./IGLEngineComp.js";
import RgbaObj from "../functions/rgbaObj.js";
export default class Rectangle implements IGLEngineComp {
    private tri1;
    private tri2;
    constructor(gl: WebGLRenderingContext, rgbaObj: RgbaObj, x: number, y: number, width: number, height: number);
    draw(gl: WebGLRenderingContext): void;
}
//# sourceMappingURL=rectangle.d.ts.map