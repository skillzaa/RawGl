// import perc2glCoord from "./functions/perc2glCoord.js";
import BaseCoreComp from "./coreComps/baseCoreComp.js";
import Engine from "./core/rawGl.js";
import GlUtil from "./core/glUtil.js";
const engine = new Engine("bilza");
// const vertices = [
//     perc2glCoord (25)   ,perc2glCoord (50), 
//     perc2glCoord (50)   ,perc2glCoord (75),  
//     perc2glCoord (50)    ,perc2glCoord (50),
// ];

const vertexShaderSrc = `
attribute highp vec2 a_pos;
void main(void) {
    gl_PointSize = 1.0;
    gl_Position = vec4( 
                        a_pos.x,
                        a_pos.y,
                        1.0,
                        1.0 );
}
`;
//------------------------------------------- 
const fragShaderSrc = `
uniform highp vec3 u_Color;
void main(void) {
  gl_FragColor = vec4 (u_Color , 1.0);
}
` ;
const comp = new BaseCoreComp();
// perc2glCoord (25)   ,perc2glCoord (50),   1,0,0,
// perc2glCoord (50)   ,perc2glCoord (75),   0,1,0,
// perc2glCoord (50)    ,perc2glCoord (50),  0,0,1,
comp.addTriangle(25,50, 50,75, 50,50);
comp.addTriangle(25,50, 50,25, 50,50);
comp.init(engine.gl(), vertexShaderSrc,fragShaderSrc);
////////////-hide this block-----------------
// const programe = comp.getProgram();

///////////////////////////////////////////////////////
//////////////--ATTRIBUTES AND UNIFORMS---/////////////
comp.setAttribute(engine.gl(), "a_pos", 2 ,4*2,0);
// comp.setAttribute(engine.gl(),"a_clr",programe, 3 , 4*5,2 * 4);

const u_ColorLoc = comp.getUniformLocation(engine.gl(), "u_Color");

engine.gl().uniform3fv(u_ColorLoc,[0,0,1]);


setInterval(function(){

  comp.update();
  engine.clear(0,0.3);
  comp.draw(engine.gl());
},20);

console.log("gl",engine.gl());

