import perc2glCoord from "./functions/perc2glCoord.js";
import Engine from "./core/rawGl.js";
import TriFan from "./coreComps/triFan.js";

const engine = new Engine("bilza");
const triFan = new TriFan(engine);

engine.clear(0,0,0.2);
triFan.draw(engine.gl());