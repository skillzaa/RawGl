import { AssetBuilder, getClrObj } from "../assets.js";
export default class Sq2x2 extends AssetBuilder {
    constructor(x = 0, y = 0, width = 100, height = 100, clrBg = null, clrMain = null) {
        super(x, y, width, height, clrBg, clrMain);
        this.clrSq2 = getClrObj(0, 0, 0);
    }
    getAsset() {
        this.add.rectWH(0, 0, 50, 100, this.clrMain);
        this.add.rectWH(50, 0, 50, 100, this.clrSq2);
        return super.getAsset();
    }
}
