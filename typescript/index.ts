import GlUtil from "./glUtil/glUtil.js";
import perc2glCoord from "./functions/perc2glCoord.js";
const gl = GlUtil.getGl("bilza");
console.log(gl);

const vertices = [
    perc2glCoord (25)   ,perc2glCoord (50),    1,0,0,
    perc2glCoord (50)   ,perc2glCoord (75),      0,1,0,
    perc2glCoord (50)    ,perc2glCoord (50),       0,0,1,

    perc2glCoord (25)  ,perc2glCoord (50),     1,0,0,
    perc2glCoord (50) ,perc2glCoord (75),   0,1,0,
    perc2glCoord (50) ,perc2glCoord (25),   0,0,1,

    perc2glCoord (50)   ,perc2glCoord (50),    1,0,0,
    perc2glCoord (50)   ,perc2glCoord (75),      0,1,0,
    perc2glCoord (75)    ,perc2glCoord (50),       0,0,1,
    
    perc2glCoord (50)   ,perc2glCoord (50),    1,0,0,
    perc2glCoord (75)   ,perc2glCoord (50),      0,1,0,
    perc2glCoord (50)    ,perc2glCoord (25),       0,0,1,


];

const vertexShaderSrc = 
`
attribute highp vec2 a_pos;
attribute highp vec3 a_clr;

uniform float translateX;
uniform float translateY;
uniform float angle;
varying highp vec3 vColor;

void main(void) {
    gl_Position = vec4( 
                        translateX  + (a_pos.x * cos(angle) - a_pos.y * sin(angle)),
                        translateY + (a_pos.x * sin(angle) + a_pos.y * cos(angle)),
                        1.0,
                        1.0 );
    vColor = a_clr;
}
`;
const fragShaderSrc = 
`
varying highp vec3 vColor;
void main(void) {
  gl_FragColor = vec4 (vColor , 1.0);
}
`;

const vertexShader = GlUtil.createShader(gl,vertexShaderSrc,gl.VERTEX_SHADER);
const fragmentShader = GlUtil.createShader(gl,fragShaderSrc,gl.FRAGMENT_SHADER);

const programe = GlUtil.getProgram(gl,vertexShader,fragmentShader);

const VOB = GlUtil.getBuffer(gl);

 GlUtil.bindBuffer(gl,VOB,vertices);

GlUtil.linkNuseProgram(gl,programe);

let angleValue = 0;
function draw(){
GlUtil.setAttribute(gl,"a_pos",programe, 2 ,4*5,0);
GlUtil.setAttribute(gl,"a_clr",programe, 3 , 4*5,2 * 4);

const translateXLoc = gl.getUniformLocation(programe, "translateX");
gl.uniform1f(translateXLoc,0.0);

const translateYLoc = gl.getUniformLocation(programe, "translateY");
gl.uniform1f(translateYLoc,0.0);
const angleLoc = gl.getUniformLocation(programe, "angle");
const rands  = Math.PI * angleValue /180;
gl.uniform1f(angleLoc,rands);
angleValue+= 0.1;

/////////////////////---draw-----------------
GlUtil.clear(gl,0.1,0.1,0.2);
gl.drawArrays(gl.TRIANGLES , 0, vertices.length); 
requestAnimationFrame(draw);
}

draw();