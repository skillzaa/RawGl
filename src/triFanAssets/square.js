import TriFan from "../coreComps/triFan.js";
export default function square(engine, x, y, width, height) {
    const triFan = new TriFan(x, y, x + width, y, x + width, y + height, 0, 0, 1);
    triFan.addVertex(x, y + height);
    triFan.init(engine);
    return triFan;
}
