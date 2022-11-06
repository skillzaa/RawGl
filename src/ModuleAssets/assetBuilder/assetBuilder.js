import TriContainer from "../../core/triContComp.js";
import ClrObj from "./clrObj.js";
import Primtive from "../../primtives/primitive.js";
import upload515ToTriCont from "../../primtives/upload515ToTriCont.js";
import Palette from "./palette.js";
import Add from "./add.js";
export default class AssetBuilder {
    constructor(x = 0, y = 0, width = 100, height = 100) {
        this.palette = new Palette();
        this.sizes = [];
        this.switches = [];
        this.showBackground = false;
        this.add = new Add();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getAsset() {
        const ctc = new TriContainer(this.x, this.y, this.width, this.height);
        if (this.showBackground == true) {
            const newDb = Primtive.rectWH(0, 0, 100, 100, this.palette.color[0]);
            upload515ToTriCont(newDb, ctc);
        }
        const remainingTriangle = this.add.getDb();
        upload515ToTriCont(remainingTriangle, ctc);
        return ctc;
    }
    setClrIfNull(clrobj, r, g, b) {
        if (clrobj == null) {
            clrobj = new ClrObj(r, g, b);
        }
        return clrobj;
    }
}
