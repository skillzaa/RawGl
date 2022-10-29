// import perc2glCoord from "./functions/perc2glCoord.js";
import BaseCoreComp from "./coreComps/baseCoreComp.js";
import Engine from "./core/rawGl.js";
import CoreTri from "./coreComps/coreTri.js";

const engine = new Engine("bilza");
const comp = new CoreTri();

comp.addTriangle(25,50, 50,75, 50,50);
comp.addTriangle(25,50, 50,25, 50,50);
comp.init(engine.gl());
////////////-hide this block-----------------
// const programe = comp.getProgram();

///////////////////////////////////////////////////////
//////////////--ATTRIBUTES AND UNIFORMS---/////////////

// engine.gl().uniform3fv(u_ColorLoc,[0,0,1]);


setInterval(function(){

  comp.update(engine.gl());
  engine.clear(0,0.3);
  comp.draw(engine.gl());
},20);


