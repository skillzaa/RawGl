import { AssetBuilder, getClrObj } from "../assets.js";
export default class Multiply extends AssetBuilder {
    constructor(x = 10, y = 40, width = 30, height = 50) {
        super(x, y, width, height);
        this.sizes[0] = 50;
        this.palette.color[1] = getClrObj(0, 0, 0);
        this.palette.color[2] = getClrObj(0, 0, 0);
    }
    getAsset() {
        this.add.diagonal(0 + this.sizes[0], 100, this.sizes[0], this.palette.color[1]);
        this.add.diagonal(100, 5, this.sizes[0], this.palette.color[2]);
        return super.getAsset();
    }
}
