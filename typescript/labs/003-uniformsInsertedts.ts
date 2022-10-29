import GlUtil from "../rawGl/glUtil.js";

const gl = GlUtil.getGl("bilza");
console.log(gl);

const vertices = [
    -1   ,  -1,   1,0,0,
    1    ,  -1,   0,1,0,
    0 ,   1   ,   0,0,1,
];

const vertexShaderSrc = 
`
attribute highp vec2 a_pos;
attribute highp vec3 a_clr;

uniform float translateX;
uniform float translateY;
varying highp vec3 vColor;

void main(void) {
    gl_Position = vec4( 
                        translateX + a_pos.x,
                        translateY + a_pos.y,
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

GlUtil.setAttribute(gl,"a_pos",programe, 2 ,4*5,0);
GlUtil.setAttribute(gl,"a_clr",programe, 3 , 4*5,2 * 4);

const translateXLoc = gl.getUniformLocation(programe, "translateX");
const translateYLoc = gl.getUniformLocation(programe, "translateY");

gl.uniform1f(translateXLoc,0.1);
gl.uniform1f(translateYLoc,0.1);

/////////////////////---draw-----------------
GlUtil.clear(gl,0.1,0.1,0.2);
gl.drawArrays(gl.TRIANGLES , 0, 3); 
