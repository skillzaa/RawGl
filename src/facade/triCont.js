import TriContCompBase from "../core/triContComp.js";
import Add from "../addObj/add.js";
export default class TriCont extends TriContCompBase {
    constructor(x = 25, y = 25, width = 50, height = 50) {
        super(x, y, width, height);
        this.add = new Add();
    }
}
