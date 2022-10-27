import CoreTriComp from "./engine/coreTriComp.js";
import RawGl from "./engine/engine.js";
import rgba from "./functions/rgba.js";

/////////////////////////////////////////////
const raw = new RawGl("bilza");
const gl = raw.getGl();
// raw.setBackgroundColor(rgba(0.2,0.1,0.1,1.0));
console.log("raw",raw);
/////////////////////////////////////////////////////
const comp = new CoreTriComp(rgba(0.9,0.9));

comp.init(gl);

raw.clear();
comp.draw(gl);

// setInterval(function(){

// },20);


// var vertices = [-50.0  , 50.0, 0.0 ,
//                 -50.0  ,-50.0, 0.0 ,
//                  50.0  ,-50.0, 0.0 ,
//                  50.0  , 50.0, 0.0  ];
