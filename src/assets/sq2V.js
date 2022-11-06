import { AssetBuilder, getClrObj } from "../moduleAssets/assets.js";
export default class SqV extends AssetBuilder {
    constructor(x = 0, y = 0, width = 100, height = 100) {
        super(x, y, width, height);
        this.clrSq2 = getClrObj(0, 0, 0);
    }
    getAsset() {
        this.add.rectWH(0, 0, 50, 100, this.palette.color[1]);
        this.add.rectWH(50, 0, 50, 100, this.palette.color[2]);
        return super.getAsset();
    }
}
