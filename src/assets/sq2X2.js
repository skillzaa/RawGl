import AssetBuilder from "../assetBuilder/assetBuilder.js";
import ClrObj from "../color/clrObj.js";
export default class Sq2x2 extends AssetBuilder {
    constructor(x = 0, y = 0, width = 100, height = 100) {
        super(x, y, width, height);
        this.sq1Color = new ClrObj(1, 0, 0);
        this.sq2Color = new ClrObj(0, 1, 0);
        this.sq3Color = new ClrObj(0, 0, 1);
        this.sq4Color = new ClrObj(1, 1, 0);
    }
    getAsset() {
        this.add.rectWH(50, 50, 50, 50, this.sq1Color.r(), this.sq1Color.g(), this.sq1Color.b());
        this.add.rectWH(0, 50, 50, 50, this.sq2Color.r(), this.sq2Color.g(), this.sq2Color.b());
        this.add.rectWH(0, 0, 50, 50, this.sq3Color.r(), this.sq3Color.g(), this.sq3Color.b());
        this.add.rectWH(50, 0, 50, 50, this.sq4Color.r(), this.sq4Color.g(), this.sq4Color.b());
        return super.getAsset();
    }
}
