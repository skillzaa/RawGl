// import EngineGl from "./engineGl/engineGl.js";
import RawGl from "./rawGl/rawGl.js";
import rgba from "./functions/rgba.js";
import RawComp from "./rawGl/rawComp.js";
// import FragRect from "./components/fragRect.js";
import fragShaderFirst from "./shaders/frag/fragShaderFirst.js";
// import Rectangle from "./components/rectangle.js";
// import Triangle from "./components/triangle/triangle.js";
// import CoreTriComp from "./components/coreTriComp.js";
// import circle from "./shaders/frag/circle.js";
import Rect from "./rawGl/rect.js";
/////////////////////////////////////////////
const raw = new RawGl("bilza");
const gl = raw.getGl();
raw.setBackgroundColor(rgba(0.2,0.1,0.1,1.0));
raw.clear();
console.log("raw",raw);
/////////////////////////////////////////////////////
const comp = new Rect(rgba(1));
// comp.addVertex(10,10);
// comp.addVertex(50,10);
// comp.addVertex(50,50);

comp.init(gl);

comp.draw(gl);

// var vertices = [-50.0  , 50.0, 0.0 ,
//                 -50.0  ,-50.0, 0.0 ,
//                  50.0  ,-50.0, 0.0 ,
//                  50.0  , 50.0, 0.0  ];
