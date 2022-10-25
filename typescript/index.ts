// import EngineGl from "./engineGl/engineGl.js";
import RawGl from "./engine/engine.js";
import rgba from "./functions/rgba.js";
import Rect from "./shapes/rect.js";
import LShape from "./shapes/lShape.js";
import Shape from "./shape/shape.js";
/////////////////////////////////////////////
const raw = new RawGl("bilza");
const gl = raw.getGl();
raw.setBackgroundColor(rgba(0.2,0.1,0.1,1.0));
console.log("raw",raw);
/////////////////////////////////////////////////////
const comp = new Shape(rgba(0.9,0.9),30,40,40,20);
comp.setBackgroundColor(0,1,0);

comp.addRect(0,0,  20,100);
comp.addRect(40,0, 20,100);
comp.addRect(80,0, 20,100);


comp.setColor(1);
// comp.addRect(0,0,20,100);
// comp.addRect(30,0,20,100);
// comp.addRect(60,0,20,100);
// comp.addRect(90,0,20,100);
// comp.addRect(0,47.5,100,5);


comp.init(gl);

raw.clear();
comp.draw(gl);

// setInterval(function(){

// },20);


// var vertices = [-50.0  , 50.0, 0.0 ,
//                 -50.0  ,-50.0, 0.0 ,
//                  50.0  ,-50.0, 0.0 ,
//                  50.0  , 50.0, 0.0  ];
