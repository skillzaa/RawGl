import Tri from "../coreComps/coreTri.js";
export default function square(engine, x = 50, y = 50, width = 30, height = 20, r = 0, g = 0, b = 0) {
    const tri = new Tri(x, y, x + width, y, x + width, y + height, r, g, b);
    tri.addTriangle(x + width, y + height, x, y + height, x, y);
    tri.init(engine);
    return tri;
}
