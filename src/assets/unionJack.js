import AssetBuilder from "../assetBuilder/assetBuilder.js";
import ClrObj from "../color/clrObj.js";
export default class UnionJack extends AssetBuilder {
    constructor(x = 0, y = 0, width = 100, height = 100) {
        super(x, y, width, height);
        this.colorCross = new ClrObj(1, 0, 0);
        this.colorSideTriangles = new ClrObj(0, 0, 1);
        this.colorBackground = new ClrObj(0.8, 0.8, 0.8);
    }
    getAsset() {
        this.add.rect(44, 0, 56, 0, 56, 100, this.colorCross.r(), this.colorCross.g(), this.colorCross.b());
        this.add.rect(0, 40, 100, 40, 100, 60, this.colorCross.r(), this.colorCross.g(), this.colorCross.b());
        this.add.tri(42, 100, 42, 80, 20, 100, this.colorSideTriangles.r(), this.colorSideTriangles.g(), this.colorSideTriangles.b());
        this.add.tri(58, 100, 58, 80, 80, 100, this.colorSideTriangles.r(), this.colorSideTriangles.g(), this.colorSideTriangles.b());
        return super.getAsset();
    }
}
