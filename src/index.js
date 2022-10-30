import Engine from "./core/rawGl.js";
import Assets from "./assets/assets.js";
const engine = new Engine("bilza");
const comp = Assets.testComp(engine.gl());
engine.clear(0, 0.3);
comp.draw(engine.gl());
