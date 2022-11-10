import AssetBuilder from "../assetBuilder/assetBuilder.js";
import ClrObj from "../color/clrObj.js";
export default class UnionJack extends AssetBuilder {
    constructor(x = 0, y = 0, width = 100, height = 100) {
        super(x, y, width, height);
        this.colorWhiteShade = new ClrObj(1, 1, 1);
        this.colorRedShade = new ClrObj(1, 0, 0);
        this.colorBackground = new ClrObj(0.2, 0.2, 0.8);
    }
    getAsset() {
        this.add.rectWH(0, 0, 100, 100, this.colorBackground.r(), this.colorBackground.g(), this.colorBackground.b());
        this.add.diagonal(0, 10, 100, 90, 10, this.colorWhiteShade.r(), this.colorWhiteShade.g(), this.colorWhiteShade.b());
        this.add.diagonal(0, 90, 100, 10, 10, this.colorWhiteShade.r(), this.colorWhiteShade.g(), this.colorWhiteShade.b());
        this.add.diagonal(0, 10, 100, 90, 5, this.colorRedShade.r(), this.colorRedShade.g(), this.colorRedShade.b());
        this.add.diagonal(0, 90, 100, 10, 5, this.colorRedShade.r(), this.colorRedShade.g(), this.colorRedShade.b());
        this.add.rect(44, 0, 56, 0, 56, 100, this.colorWhiteShade.r(), this.colorWhiteShade.g(), this.colorWhiteShade.b());
        this.add.rect(0, 40, 100, 40, 100, 60, this.colorWhiteShade.r(), this.colorWhiteShade.g(), this.colorWhiteShade.b());
        this.add.rect(47, 0, 53, 0, 53, 100, this.colorRedShade.r(), this.colorRedShade.g(), this.colorRedShade.b());
        this.add.rect(0, 43, 100, 43, 100, 56, this.colorRedShade.r(), this.colorRedShade.g(), this.colorRedShade.b());
        return super.getAsset();
    }
}
