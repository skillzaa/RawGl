import getClrObj from "./getClrObj.js";
export default class Palette {
    constructor() {
        this.color = [];
        this.color[0] = getClrObj(1.0, 1.0, 1.0);
        this.color[1] = getClrObj(0.0, 0.0, 0.0);
        this.color[2] = getClrObj(1.0, 0.0, 0.0);
        this.color[3] = getClrObj(0.0, 1.0, 0.0);
        this.color[4] = getClrObj(0.0, 0.0, 1.0);
        this.color[5] = getClrObj(1.0, 1.0, 0.0);
        this.color[6] = getClrObj(Math.random(), Math.random(), Math.random());
        this.color[7] = getClrObj(Math.random(), Math.random(), Math.random());
        this.color[8] = getClrObj(Math.random(), Math.random(), Math.random());
        this.color[9] = getClrObj(Math.random(), Math.random(), Math.random());
    }
}
