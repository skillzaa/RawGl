import CoreTriContainer from "./coreTriContainer.js";
import ColorObj from "./colorObj.js";
import VAO from "./vao.js";
export default class AssetBuilder {
    constructor(x = 0, y = 0, width = 20, height = 20) {
        this.showBackground = true;
        this.color = new ColorObj(0.9, 0.9, 0.9);
        this.colorBackground = new ColorObj(0.2, 0.2, 0.2);
        this.vertices = new VAO();
        this.bgVertices = new VAO();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getAsset() {
        const ctc = new CoreTriContainer(this.x, this.y, this.width, this.height);
        if (this.showBackground == true) {
            this.bgVertices.addTriangle(0, 0, 100, 0, 100, 100, 1, 0, 0);
            this.bgVertices.addTriangle(100, 100, 0, 100, 0, 0, 0, 1, 0);
        }
        this.vertices.addTriangle(4, 40, 40, 10, 50, 90, 0, 0, 0);
        this.vertices.addTriangle(20, 20, 80, 20, 60, 80, 0, 0, 1);
        ctc.setBgVertices(this.bgVertices);
        ctc.setVertices(this.vertices);
        return ctc;
    }
}
