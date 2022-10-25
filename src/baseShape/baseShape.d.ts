import CoreTriComp from "../engine/coreTriComp.js";
import RgbaObj from "../functions/rgbaObj.js";
export default class BaseShape {
    protected coreTri: CoreTriComp;
    constructor(rgbaObj?: RgbaObj, x?: number, y?: number, width?: number, height?: number);
    addVertex(x: number, y: number): void;
    addTri(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
    init(gl: WebGLRenderingContext): void;
    draw(gl: WebGLRenderingContext): void;
}
//# sourceMappingURL=baseShape.d.ts.map