import BaseTriComp from "../core/baseTriComp.js";
import Primtive from "../primtives/primitives.js";
export default class BaseComp extends BaseTriComp {
    constructor() {
        super();
        this.add = Primtive;
    }
}
