import rgba from "../functions/rgba.js";
export default class Engine {
    constructor(canvasId = "bilza", color = rgba(0, 0, 1)) {
        const canvas = document.getElementById(canvasId);
        if (canvas == null) {
            throw new Error("canvas not found");
        }
        const gl = canvas.getContext("webgl");
        if (gl == null) {
            throw new Error("Unable to initialize WebGL. Your browser or machine may not support it.");
        }
        this.gl = gl;
        this.colorBackground = color;
    }
    clear() {
        this.gl.clearColor(this.colorBackground.r, this.colorBackground.g, this.colorBackground.b, this.colorBackground.a);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
    getGl() {
        return this.gl;
    }
    setBackgroundColor(rgba) {
        this.colorBackground = rgba;
    }
}
