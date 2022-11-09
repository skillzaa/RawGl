import { TriCont } from "../rawGl.js";
import ClrObj from "../color/clrObj.js";
import upload515ToTriCont from "../formats/upload515ToTriCont.js";
import Add from "./add.js";
export default class AssetBuilder {
    constructor(x = 0, y = 0, width = 100, height = 100) {
        this.showBackground = false;
        this.colorBackground = new ClrObj(1, 1, 1);
        this.add = new Add();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getAsset() {
        const ctc = new TriCont(this.x, this.y, this.width, this.height);
        if (this.showBackground == true) {
            ctc.add.rectWH(0, 0, 100, 100, this.colorBackground.r(), this.colorBackground.g(), this.colorBackground.b());
        }
        const remainingTriangle = this.add.getDb();
        upload515ToTriCont(remainingTriangle, ctc);
        return ctc;
    }
}
