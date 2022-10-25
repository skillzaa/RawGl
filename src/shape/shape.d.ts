import CoreTriComp from "../engine/coreTriComp.js";
import RgbaObj from "../functions/rgbaObj.js";
export default class BaseShape {
    protected coreTri: CoreTriComp;
    protected background: CoreTriComp;
    showBackground: boolean;
    constructor(rgbaObj?: RgbaObj, x?: number, y?: number, width?: number, height?: number);
    setBackgroundColor(r?: number, g?: number, b?: number, a?: number): void;
    setColor(r?: number, g?: number, b?: number, a?: number): void;
    addVertex(x: number, y: number): void;
    addTri(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
    addRect(x: number, y: number, width: number, height: number): void;
    addBackgroundRect(): void;
    init(gl: WebGLRenderingContext): void;
    draw(gl: WebGLRenderingContext): void;
    private localizeWidth;
    private localizeHeight;
}
//# sourceMappingURL=shape.d.ts.map