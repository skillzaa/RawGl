import FillRect from "./coreTriAssetComps/fillRect.js";
import Engine from "./core/rawGl.js";
import CoreTriContainer from "./coreComps/coreTriContainer.js";
////////////////////////////////////////////////
const engine = new Engine("bilza");
const comp = new CoreTriContainer();

comp.init(engine.gl());


setInterval(function(){

  comp.update(engine.gl());
  engine.clear(0,0.3);
  comp.draw(engine.gl());
},20);


