import FillRect from "../coreTriAssetComps/fillRect.js";
import Engine from "../core/rawGl.js";
const engine = new Engine("bilza");
const comp = new FillRect(20, 20, 30, 30, 1);
comp.init(engine.gl());
setInterval(function () {
    comp.update(engine.gl());
    engine.clear(0, 0.3);
    comp.draw(engine.gl());
}, 20);
