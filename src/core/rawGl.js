import GlUtil from "./glUtil.js";
export default class engine {
    constructor(canvasId = "bilza") {
        this._gl = GlUtil.getGl(canvasId);
    }
    gl() {
        return this._gl;
    }
    clear(r = 0, g = 0, b = 0, a = 1) {
        GlUtil.clear(this._gl, r, g, b, a);
    }
}
