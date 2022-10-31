import TriContainer from "./triContainer.js";
import VAO from "./core/vao.js";
import ClrObj from "./core/clrObj.js";
export default class AssetBuilder {
    constructor(x = 0, y = 0, width = 100, height = 100, clrBg = null, clrMain = null) {
        if (clrMain == null) {
            clrMain = new ClrObj(0, 0, 0);
        }
        if (clrBg == null) {
            clrBg = new ClrObj(1, 1, 1);
        }
        this.clrMain = clrMain;
        this.clrBg = clrBg;
        this.palette = [];
        this.showBackground = true;
        this.vertices = new VAO();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    setClrBg(r = 0, g = 0, b = 0) {
        this.clrBg = new ClrObj(r, g, b);
    }
    getAsset() {
        const ctc = new TriContainer(this.x, this.y, this.width, this.height);
        if (this.showBackground == true) {
            const bgVertices = new VAO();
            bgVertices.addRect(0, 0, 100, 100, this.clrBg.r(), this.clrBg.g(), this.clrBg.b());
            ctc.vertices.concat(bgVertices);
        }
        ctc.vertices.concat(this.vertices);
        return ctc;
    }
    setClrIfNull(clrobj, r, g, b) {
        if (clrobj == null) {
            clrobj = new ClrObj(r, g, b);
        }
        return clrobj;
    }
}
