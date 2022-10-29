import perc2glCoord from "../functions/perc2glCoord.js";
import Engine from "../core/rawGl.js";
import GlUtil from "../core/glUtil.js";

const engine = new Engine("bilza");
const vertices = [
    perc2glCoord (25)   ,perc2glCoord (50),   1,0,0,
    perc2glCoord (50)   ,perc2glCoord (75),   0,1,0,
    perc2glCoord (50)    ,perc2glCoord (50),  0,0,1,
];

const vertexShaderSrc = `
attribute highp vec2 a_pos;
attribute highp vec3 a_clr;
varying highp vec3 vColor;

void main(void) {
    gl_Position = vec4( 
                        a_pos.x,
                        a_pos.y,
                        1.0,
                        1.0 );
    vColor = a_clr;
}
`;
//------------------------------------------- 
const fragShaderSrc = `
varying highp vec3 vColor;
void main(void) {
  gl_FragColor = vec4 (vColor , 1.0);
}
` ;

////////////-hide this block-----------------
const programe = engine.createProgram(vertices, vertexShaderSrc,fragShaderSrc);

///////////////////////////////////////////////////////
//----------------
const buff = GlUtil.getBuffer(engine.gl());
GlUtil.bindBuffer(engine.gl(),buff,vertices);

///////////////////////////////////////////////////////
//////////////--ATTRIBUTES AND UNIFORMS---/////////////
engine.setAttribute("a_pos",programe, 2 ,4*5,0);
engine.setAttribute("a_clr",programe, 3 , 4*5,2 * 4);

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// engine.update(vertices);
function draw(){
vertices[0] += 0.001;
//we need to bind twice   
GlUtil.bindBuffer(engine.gl(),buff,vertices);  
  // engine.bindBuffer(engine.vao,vertices);
/////////////////////---draw-----------------
engine.clear(0.1,0.1,0.2);
engine.gl().drawArrays(engine.gl().TRIANGLES , 0, vertices.length); 
requestAnimationFrame(draw);
}

draw();
console.log("gl",engine.gl());

