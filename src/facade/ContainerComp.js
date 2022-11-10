import TriContComp from "../core/coreContainerComp.js";
import Add from "../addObj/add.js";
export default class TriCont extends TriContComp {
    constructor(x = 25, y = 25, width = 50, height = 50) {
        super(x, y, width, height);
        this.add = new Add();
    }
    update(gl) {
        this.setData(this.add.get515Triangles());
        super.update(gl);
    }
}
