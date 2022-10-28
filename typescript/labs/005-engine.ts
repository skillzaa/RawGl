import perc2glCoord from "../functions/perc2glCoord.js";
import Engine from "../engine/engine.js";

const engine = new Engine("bilza");
const gl = engine.getGl();
const vertices = [
    perc2glCoord (25)   ,perc2glCoord (50),   1,0,0,
    perc2glCoord (50)   ,perc2glCoord (75),   1,0,0,
    perc2glCoord (50)    ,perc2glCoord (50),  1,0,0,
];

const vertexShaderSrc = engine.stdVertexShaderSrc(); 
const fragShaderSrc = engine.stdFragShaderSrc() ;

const vertexShader = engine.createShader(vertexShaderSrc,gl.VERTEX_SHADER);
const fragmentShader = engine.createShader(fragShaderSrc,gl.FRAGMENT_SHADER);

const programe = engine.getProgram(vertexShader,fragmentShader);

const VOB = engine.getBuffer();

engine.bindBuffer(VOB,vertices);

engine.linkNuseProgram(programe);

let angleValue = 0;
function draw(){
engine.setAttribute("a_pos",programe, 2 ,4*5,0);
engine.setAttribute("a_clr",programe, 3 , 4*5,2 * 4);

const translateXLoc = gl.getUniformLocation(programe, "translateX");
gl.uniform1f(translateXLoc,0.0);

const translateYLoc = gl.getUniformLocation(programe, "translateY");
gl.uniform1f(translateYLoc,0.0);
const angleLoc = gl.getUniformLocation(programe, "angle");
const rands  = Math.PI * angleValue /180;
gl.uniform1f(angleLoc,rands);
angleValue+= 0.1;

/////////////////////---draw-----------------
engine.clear(0.1,0.1,0.2);
gl.drawArrays(gl.TRIANGLES , 0, vertices.length); 
requestAnimationFrame(draw);
}

draw();