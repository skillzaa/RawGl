import { AssetBuilder } from "../moduleAssets/assets.js";
export default class Sq2x2 extends AssetBuilder {
    constructor(x = 0, y = 0, width = 100, height = 100) {
        super(x, y, width, height);
    }
    getAsset() {
        this.add.rectWH(50, 50, 50, 50, this.palette.color[1]);
        this.add.rectWH(0, 50, 50, 50, this.palette.color[2]);
        this.add.rectWH(0, 0, 50, 50, this.palette.color[3]);
        this.add.rectWH(50, 0, 50, 50, this.palette.color[4]);
        return super.getAsset();
    }
}
