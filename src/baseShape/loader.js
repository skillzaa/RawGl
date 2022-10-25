export default class Loader {
    constructor() {
    }
    static rect(coreTri, x, y, width, height) {
        coreTri.addVertex(x, y);
        coreTri.addVertex(x + width, y);
        coreTri.addVertex(x, y + height);
        coreTri.addVertex(x + width, y + height);
        coreTri.addVertex(x, y + height);
        coreTri.addVertex(x + width, y);
    }
}
