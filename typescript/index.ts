// import perc2glCoord from "./functions/perc2glCoord.js";
import CoreTri from "./coreComps/coreTri.js";
import Engine from "./core/rawGl.js";
import FillRect from "./coreTriAssetComps/fillRect.js";
////////////////////////////////////////////////
const engine = new Engine("bilza");
const comp = new FillRect(20,20,30,30);


comp.init(engine.gl());


setInterval(function(){

  comp.update(engine.gl());
  engine.clear(0,0.3);
  comp.draw(engine.gl());
},20);


