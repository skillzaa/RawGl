import RgbaObj from "../functions/rgbaObj.js";
import CompFactory from "./compFactory.js";
export default class Engine {
    private gl;
    colorBackground: RgbaObj;
    constructor(canvasId?: string, color?: RgbaObj);
    clear(): void;
    getGl(): WebGLRenderingContext;
    setBackgroundColor(rgba: RgbaObj): void;
    add(): CompFactory;
    draw(): void;
}
//# sourceMappingURL=engine.d.ts.map