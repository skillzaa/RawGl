import BaseTriComp from "../core/baseComp.js";
import Add from "../addObj/add.js";
export default class BaseTri extends BaseTriComp {
    constructor() {
        super();
        this.add = new Add();
    }
    update(gl) {
        this.setData(this.add.get515TriGlCoords());
        super.update(gl);
    }
}
