import AssetBuilder from "../assetBuilder/assetBuilder.js";
export default class Plus extends AssetBuilder {
    constructor(x = 10, y = 40, width = 30, height = 50) {
        super(x, y, width, height);
        this.sizes[0] = 4;
        this.sizes[1] = 4;
    }
    getAsset() {
        const lineWdX = this.sizes[0];
        const lineWdY = this.sizes[1];
        const stPtX = (100 - lineWdX) / 2;
        const stPtY = (100 - lineWdY) / 2;
        this.add.rectWH(stPtX, 0, lineWdX, 100, this.palette.color[1]);
        this.add.rectWH(0, stPtY, 100, lineWdY, this.palette.color[2]);
        return super.getAsset();
    }
}
