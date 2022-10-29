import perc2glCoord from "../functions/perc2glCoord.js";
export default class TriFan {
    constructor(engine) {
        this.ptSize = 10;
        this.vertices = [
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
        const programe = engine.createProgram(this.vertices, vertexShaderSrc, fragShaderSrc);
        engine.setAttribute("a_pos", programe, 2, 4 * 5, 0);
        engine.setAttribute("a_clr", programe, 3, 4 * 5, 2 * 4);
        this.u_ptSizeLoc = engine.getUniformLocation(programe, "u_ptSize");
    }
    draw(gl) {
        gl.uniform1f(this.u_ptSizeLoc, this.ptSize);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, this.vertices.length);
    }
}
