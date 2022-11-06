import AssetBuilder from "../assetBuilder/assetBuilder.js";
export default class RectTest extends AssetBuilder {
    constructor(x = 0, y = 0, width = 100, height = 100) {
        super(x, y, width, height);
    }
    getAsset() {
        this.add.rect(0, 0, 50, 0, 50, 50, this.palette.color[1]);
        return super.getAsset();
    }
}
