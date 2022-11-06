import { AssetBuilder, getClrObj } from "../moduleAssets/assets.js";
export default class Mountains extends AssetBuilder {
    constructor(x = 10, y = 40, width = 30, height = 50) {
        super(x, y, width, height);
        this.sizes[0] = 80;
        this.sizes[1] = 70;
        this.sizes[2] = 60;
        this.palette.color[0] = getClrObj(0.3, 0.3, 0.6);
        this.palette.color[1] = getClrObj(0.9, 0.4, 0.4);
        this.palette.color[2] = getClrObj(0.4, 0.9, 0.4);
        this.palette.color[3] = getClrObj(0.5, 0.5, 0.9);
    }
    getAsset() {
        this.add.tri(0, 0, 50, 0, 25, this.sizes[0], this.palette.color[1]);
        this.add.tri(50, 0, 100, 0, 75, this.sizes[1], this.palette.color[2]);
        this.add.tri(25, 0, 75, 0, 50, this.sizes[2], this.palette.color[3]);
        return super.getAsset();
    }
}
