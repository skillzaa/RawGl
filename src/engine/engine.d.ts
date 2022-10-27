import RgbaObj from "../functions/rgbaObj.js";
export default class Engine {
    private gl;
    colorBackground: RgbaObj;
    constructor(canvasId?: string, color?: RgbaObj);
    clear(): void;
    getGl(): WebGLRenderingContext;
    setBackgroundColor(rgba: RgbaObj): void;
}
//# sourceMappingURL=engine.d.ts.map