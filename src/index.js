import Engine from "./core/rawGl.js";
import TriFan from "./coreComps/triFan.js";
const engine = new Engine("bilza");
const triFan = new TriFan();
triFan.init(engine);
engine.clear(0, 0, 0.2);
triFan.draw(engine.gl());
