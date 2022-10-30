export default class WhObj {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    rightEdge() {
        return this.x + this.width;
    }
    topEdge() {
        return this.y + this.height;
    }
    xPerc(perc) {
        const a = (this.width / 100) * perc;
        return this.x + a;
    }
    yPerc(perc) {
        const a = (this.height / 100) * perc;
        return this.x + a;
    }
}