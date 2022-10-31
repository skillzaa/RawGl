import CoreTriContainer from "../../coreComps/coreTriContainer.js";
import ColorObj from "../colorObj.js";
import VAO from "../../coreComps/vao.js";
export default class AssetBuilder {
    constructor(x = 0, y = 0, width = 20, height = 20) {
        this.showBackground = true;
        this.colorBackground = new ColorObj(0.2, 0.2, 0.2);
        this.vertices = new VAO();
        this.bgVertices = new VAO();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    setColorBackground(r = 0, g = 0, b = 0) {
        this.colorBackground = new ColorObj(r, g, b);
    }
    getAsset(gl) {
        const ctc = new CoreTriContainer(this.x, this.y, this.width, this.height);
        if (this.showBackground == true) {
            this.bgVertices.addRectangle(0, 0, 100, 100, this.colorBackground.r(), this.colorBackground.g(), this.colorBackground.b());
            ctc.vertices.concat(this.bgVertices);
        }
        ctc.vertices.concat(this.vertices);
        return ctc;
    }
}
