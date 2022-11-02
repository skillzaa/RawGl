import IGLEngineComp from "./IGLEngineComp.js";
import RgbaObj from "../functions/rgbaObj.js";
export default class FragRect implements IGLEngineComp {
    private tri1;
    constructor(rgbaObj: RgbaObj, x: number, y: number, width: number, height: number);
    init(gl: WebGLRenderingContext, fragStr: string): void;
    draw(gl: WebGLRenderingContext): void;
}
//# sourceMappingURL=fragRect.d.ts.map