import CoreTriContainer from "../coreComps/coreTriContainer.js";
import ColorObj from "../coreComps/colorObj.js";
import VAO from "../coreComps/vao.js";
export default class AssetBuilder {
    constructor(x = 0, y = 0, width = 20, height = 20) {
        this.showBackground = false;
        this.color = new ColorObj(0.9, 0.9, 0.9);
        this.colorBackground = new ColorObj(0.2, 0.2, 0.2);
        this.vertices = new VAO();
        this.bgVertices = new VAO();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    setColor(r = 0, g = 0, b = 0) {
        this.color = new ColorObj(r, g, b);
    }
    setColorBackground(r = 0, g = 0, b = 0) {
        this.colorBackground = new ColorObj(r, g, b);
    }
    getAsset(gl) {
        const ctc = new CoreTriContainer(gl, this.x, this.y, this.width, this.height);
        if (this.showBackground == true) {
            this.bgVertices.addTriangle(0, 0, 100, 0, 100, 100, this.colorBackground.r(), this.colorBackground.g(), this.colorBackground.b());
            this.bgVertices.addTriangle(100, 100, 0, 100, 0, 0, this.colorBackground.r(), this.colorBackground.g(), this.colorBackground.b());
        }
        return ctc;
    }
}
