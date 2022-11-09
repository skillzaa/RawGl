import TriContComp from "../core/coreContainerComp.js";
;
import Add from "../addObj/add.js";
export default class AssetBuilder {
    constructor(x = 0, y = 0, width = 100, height = 100) {
        this.add = new Add();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getAsset() {
        const ctc = new TriContComp(this.x, this.y, this.width, this.height);
        ctc.setData(this.add.get515Triangles());
        return ctc;
    }
}
