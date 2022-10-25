import CoreTriComp from "../engine/coreTriComp.js";
import rgba from "../functions/rgba.js";
import fragShaderFirst from "../shaders/frag/fragShaderFirst.js";
import setBwZeroToHundred from "../functions/setBwZeroToHundred.js";
export default class BaseShape {
    constructor(rgbaObj = rgba(1, 1, 1, 1), x = 50, y = 50, width = 40, height = 20) {
        this.showBackground = true;
        this.coreTri = new CoreTriComp(rgbaObj, x, y, width, height);
        this.background = new CoreTriComp(rgba(0, 0, 1), x, y, width, height);
        this.addBackgroundRect();
    }
    setBackgroundColor(r = 0, g = 0, b = 0, a = 1) {
        this.background.rgba = rgba(r, g, b, a);
    }
    setColor(r = 0, g = 0, b = 0, a = 1) {
        this.coreTri.rgba = rgba(r, g, b, a);
    }
    addVertex(x, y) {
        this.coreTri.addVertex(this.localizeWidth(x), this.localizeHeight(y));
    }
    addTri(x1, y1, x2, y2, x3, y3) {
        this.coreTri.addTri(this.localizeWidth(x1), this.localizeHeight(y1), this.localizeWidth(x2), this.localizeHeight(y2), this.localizeWidth(x3), this.localizeHeight(y3));
    }
    addRect(x, y, width, height) {
        this.addTri(x, y, x + width, y, x + width, y + height);
        this.addTri(x, y, x, y + height, x + width, y + height);
    }
    addBackgroundRect() {
        this.background.addTri(this.localizeWidth(0), this.localizeHeight(0), this.localizeWidth(100), this.localizeHeight(0), this.localizeWidth(100), this.localizeHeight(100));
        this.background.addTri(this.localizeWidth(0), this.localizeHeight(0), this.localizeWidth(0), this.localizeHeight(100), this.localizeWidth(100), this.localizeHeight(100));
    }
    init(gl) {
        this.coreTri.init(gl, fragShaderFirst(this.coreTri.rgba.r, this.coreTri.rgba.g, this.coreTri.rgba.b, this.coreTri.rgba.a));
        this.background.init(gl, fragShaderFirst(this.background.rgba.r, this.background.rgba.g, this.background.rgba.b, this.background.rgba.a));
    }
    draw(gl) {
        if (this.showBackground == true) {
            this.background.draw(gl);
        }
        this.coreTri.draw(gl);
    }
    localizeWidth(worldXPerc) {
        worldXPerc = setBwZeroToHundred(worldXPerc);
        const localXPerc = (this.coreTri.width / 100) * worldXPerc;
        return this.coreTri.x + localXPerc;
    }
    localizeHeight(worldYPerc) {
        worldYPerc = setBwZeroToHundred(worldYPerc);
        const localYPerc = (this.coreTri.height / 100) * worldYPerc;
        return this.coreTri.y + localYPerc;
    }
}
