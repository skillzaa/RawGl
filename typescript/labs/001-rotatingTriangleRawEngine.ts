import perc2glCoord from "../functions/perc2glCoord.js";
import Engine from "../core/rawGl.js";

const engine = new Engine("bilza");
const vertices = [
    perc2glCoord (25)   ,perc2glCoord (50),   1,0,0,
    perc2glCoord (50)   ,perc2glCoord (75),   1,0,0,
    perc2glCoord (50)    ,perc2glCoord (50),  1,0,0,
];

const vertexShaderSrc = engine.stdVertexShaderSrc(); 
const fragShaderSrc = engine.stdFragShaderSrc() ;

////////////-hide this block-----------------
const programe = engine.createProgram(vertices,vertexShaderSrc,fragShaderSrc);

let angleValue = 0;
///////////////////////////////////////////////////////
//////////////--ATTRIBUTES AND UNIFORMS---/////////////
engine.setAttribute("a_pos",programe, 2 ,4*5,0);
engine.setAttribute("a_clr",programe, 3 , 4*5,2 * 4);
//----------------
const translateXLoc = engine.getUniformLocation(programe, "translateX");
const translateYLoc = engine.getUniformLocation(programe, "translateY");
const angleLoc = engine.getUniformLocation(programe, "angle");
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

function draw(){
  engine.gl().uniform1f(translateYLoc,0.0);
engine.gl().uniform1f(translateXLoc,0.0);

const rads  = Math.PI * angleValue /180;

engine.gl().uniform1f(angleLoc,rads);
angleValue+= 0.1;

/////////////////////---draw-----------------
engine.clear(0.1,0.1,0.2);
engine.gl().drawArrays(engine.gl().TRIANGLES , 0, vertices.length); 
requestAnimationFrame(draw);
}

draw();
console.log("gl",engine.gl());