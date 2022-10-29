import perc2glCoord from "./functions/perc2glCoord.js";
import Engine from "./rawGl/rawGl.js";
const engine = new Engine("bilza");
const vertices = [
    perc2glCoord(50), perc2glCoord(50), 1.0, 0.0, 0.0,
    perc2glCoord(10), perc2glCoord(70), 0.0, 1.0, 0.0,
    perc2glCoord(30), perc2glCoord(90), 1.0, 0.0, 0.0,
    perc2glCoord(80), perc2glCoord(90), 0.0, 1.0, 0.0,
    perc2glCoord(70), perc2glCoord(60), 1.0, 0.0, 0.0,
    perc2glCoord(90), perc2glCoord(30), 1.0, 0.0, 0.0,
];
const vertexShaderSrc = `
attribute highp vec2 a_pos;
attribute highp vec3 a_clr;

uniform float u_ptSize;
varying highp vec3 vColor;

void main(void) {
    gl_PointSize = u_ptSize;
    gl_Position = vec4( 
                        a_pos.x,
                        a_pos.y,
                        1.0,
                        1.0 );
    vColor = a_clr;
}
`;
const fragShaderSrc = `
varying highp vec3 vColor;
void main(void) {
  gl_FragColor = vec4 (vColor , 1.0);
}
`;
const programe = engine.createProgram(vertices, vertexShaderSrc, fragShaderSrc);
let angleValue = 0;
engine.setAttribute("a_pos", programe, 2, 4 * 5, 0);
engine.setAttribute("a_clr", programe, 3, 4 * 5, 2 * 4);
const u_ptSizeLoc = engine.getUniformLocation(programe, "u_ptSize");
let ptSize = 0;
function draw() {
    engine.gl().uniform1f(u_ptSizeLoc, ptSize);
    engine.clear(0.1, 0.4, 0.2);
    engine.gl().drawArrays(engine.gl().TRIANGLE_FAN, 0, vertices.length);
    requestAnimationFrame(draw);
}
draw();
console.log("gl", engine.gl());
