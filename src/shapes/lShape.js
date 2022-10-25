import rgba from "../functions/rgba.js";
import BaseShape from "../shape/shape.js";
export default class LShape extends BaseShape {
    constructor(rgbaObj = rgba(1, 1, 1, 1), x = 50, y = 50, width = 20, height = 40) {
        super(rgbaObj, x, y, width, height);
        this.coreTri.addTri(x + width / 4, y + height, x, y + height, x + width / 4, y);
    }
}
