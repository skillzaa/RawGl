import TriContainer from "../triContainer/triContainer.js";
import ClrObj from "./clrObj.js";
import FiveFifteenDb from "../fiveFifteen/fiveFifteenDb.js";
import Palette from "./palette.js";
export default class AssetBuilder {
    constructor(x = 0, y = 0, width = 100, height = 100) {
        this.palette = new Palette();
        this.sizes = [];
        this.switches = [];
        this.showBackground = true;
        this.add = new FiveFifteenDb();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getAsset() {
        const ctc = new TriContainer(this.x, this.y, this.width, this.height);
        if (this.showBackground == true) {
            const newDb = new FiveFifteenDb();
            newDb.rectWH(0, 0, 100, 100, this.palette.color[0]);
            newDb.uploadData(ctc);
        }
        this.add.uploadData(ctc);
        return ctc;
    }
    setClrIfNull(clrobj, r, g, b) {
        if (clrobj == null) {
            clrobj = new ClrObj(r, g, b);
        }
        return clrobj;
    }
}
