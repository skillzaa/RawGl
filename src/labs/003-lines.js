import perc2glCoord from "../functions/perc2glCoord.js";
import Engine from "../core/rawGl.js";
const engine = new Engine("bilza");
const vertices = [
    perc2glCoord(10), perc2glCoord(90), 1.0, 0.0, 0.0,
    perc2glCoord(20), perc2glCoord(40), 0.0, 1.0, 0.0,
    perc2glCoord(20), perc2glCoord(40), 1.0, 0.0, .0,
    perc2glCoord(50), perc2glCoord(75), 0.0, 1.0, 0.0,
    perc2glCoord(50), perc2glCoord(75), 0.0, 1.0, 0.0,
    perc2glCoord(10), perc2glCoord(90), 1.0, 0.0, .0,
];
const vertexShaderSrc = `
attribute highp vec2 a_pos;
attribute highp vec3 a_clr;

// uniform float angle;
varying highp vec3 vColor;

void main(void) {
    gl_PointSize = 40.0;
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
function draw() {
    engine.clear(0.1, 0.4, 0.2);
    engine.gl().drawArrays(engine.gl().LINES, 0, vertices.length);
}
draw();
console.log("gl", engine.gl());
