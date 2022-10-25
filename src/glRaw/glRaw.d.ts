import RgbaObj from "../functions/rgbaObj.js";
export default class GlRaw {
    private gl;
    colorBackground: RgbaObj;
    constructor(canvasId?: string, color?: RgbaObj);
    clear(): void;
    getGl(): WebGLRenderingContext;
    setBackgroundColor(rgba: RgbaObj): void;
}
//# sourceMappingURL=glRaw.d.ts.map