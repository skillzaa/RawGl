import AssetBuilder from "../assetBuilder/assetBuilder.js";
export default class ExclamationMark extends AssetBuilder {
    constructor(x = 10, y = 40, width = 30, height = 50) {
        super(x, y, width, height);
        this.palette.color[0].set(0, 0, 1);
        this.palette.color[1].set(1);
    }
    getAsset() {
        this.add.rectWH(0, 25, 100, 75, this.palette.color[1]);
        this.add.rectWH(0, 0, 100, 20, this.palette.color[1]);
        return super.getAsset();
    }
}
