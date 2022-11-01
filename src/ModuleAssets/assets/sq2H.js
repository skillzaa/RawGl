import { AssetBuilder } from "../assets.js";
export default class SqH extends AssetBuilder {
    constructor(x = 0, y = 0, width = 100, height = 100) {
        super(x, y, width, height);
    }
    getAsset() {
        this.add.rectWH(0, 0, 100, 100, this.palette.color[1]);
        this.add.rectWH(0, 50, 100, 100, this.palette.color[2]);
        return super.getAsset();
    }
}
