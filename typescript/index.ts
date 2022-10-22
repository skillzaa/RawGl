import GlPack from "./glPack/glPack.js";
import verShaderFirst from "./shaders/vertex/verShaderFirst.js";
import fragShaderFirst from "./shaders/fragment/fragShaderFirst.js";
import hsl2rgba from "./functions/hsl2rgba.js";
import Triangle from "./components/triangle/triangle.js";
import Rgba from "./functions/rgba.js";
import perc2glCoord from "./functions/perc2glCoord.js";
/////////////////////////////////////////////
const glPack = new GlPack("bilza");
glPack.clear(0.5,0.3,0);
const gl = glPack.getGl();

const triangle  = new Triangle(gl,-0.5,-0.5,0.5,-0.5,0,0.5,
    new Rgba(1,0,0) );
triangle.draw(gl);

const triangle02  = new Triangle(gl,
    -1,-1,
    -0.5,-1,
    -0.5,1,
    new Rgba(0,1,0)
    );
triangle02.draw(gl);

// ////////////////////////////////////////////////////
// glPack.createProgram( verShaderFirst() ,fragShaderFirst() );

// glPack.setVertexPosition();
// glPack.draw();
// //--WAITING FOR THE UNKNOWN
console.log("perc2glCoord-0",perc2glCoord(0));
console.log("perc2glCoord-25",perc2glCoord(25));
console.log("perc2glCoord-50",perc2glCoord(50));
console.log("perc2glCoord-75",perc2glCoord(75));
console.log("perc2glCoord-100",perc2glCoord(100));