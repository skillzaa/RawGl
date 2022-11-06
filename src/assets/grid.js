import { AssetBuilder, getClrObj } from "../moduleAssets/assets.js";
export default class Sq2x2 extends AssetBuilder {
    constructor(x = 0, y = 0, width = 100, height = 100) {
        super(x, y, width, height);
    }
    getAsset() {
        this.add.rectWH(0, 0, 100, 5, getClrObj(1));
        return super.getAsset();
    }
}
