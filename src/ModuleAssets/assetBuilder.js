import TriContainer from "./triContainer.js";
import ClrObj from "./core/clrObj.js";
import { getClrObj } from "./assets.js";
import FiveFifteenDb from "./fiveFifteen/fiveFifteenDb.js";
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
        this.palette = this.initPalette();
        this.showBackground = true;
        this.add = new FiveFifteenDb();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    setColorBg(r = 0, g = 0, b = 0) {
        this.clrBg = new ClrObj(r, g, b);
    }
    getAsset() {
        const ctc = new TriContainer(this.x, this.y, this.width, this.height);
        if (this.showBackground == true) {
            const newDb = new FiveFifteenDb();
            newDb.addRect(0, 0, 100, 100, this.clrBg);
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
    initPalette() {
        const ar = [];
        ar[0] = getClrObj(1, 0, 0);
        ar[1] = getClrObj(0, 1, 0);
        ar[2] = getClrObj(0, 0, 1);
        ar[3] = getClrObj(1, 1, 0);
        ar[4] = getClrObj(0, 1, 1);
        ar[5] = getClrObj(1, 0, 1);
        ar[6] = getClrObj(0.3, 0.5, 0.8);
        ar[7] = getClrObj(0.3, 0.5, 0.8);
        ar[8] = getClrObj(0.3, 0.5, 0.8);
        ar[9] = getClrObj(0.3, 0.5, 0.8);
        return ar;
    }
}
