import RgbaObj from "../functions/rgbaObj.js";
export default class Rectangle {
    private coreTri;
    constructor(rgbaObj?: RgbaObj, x?: number, y?: number, width?: number, height?: number);
    init(gl: WebGLRenderingContext): void;
    draw(gl: WebGLRenderingContext): void;
}
//# sourceMappingURL=rect.d.ts.map