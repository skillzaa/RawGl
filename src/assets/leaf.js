import AssetBuilder from "../assetBuilder/assetBuilder.js";
import ClrObj from "../color/clrObj.js";
export default class Mountains extends AssetBuilder {
    constructor(x = 10, y = 40, width = 30, height = 50) {
        super(x, y, width, height);
        this.color = new ClrObj(1, 0, 0);
    }
    getAsset() {
        this.add.rectWH(0, 0, 100, 100, 0, 0, 1);
        this.add.curveQuad(10, 10, 50, 100, 97, 10, 2, 4.5, 1, 0, 0, 0.2);
        return super.getAsset();
    }
}
