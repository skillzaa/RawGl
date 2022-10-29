import perc2glCoord from "../functions/perc2glCoord.js";
export default class TriFan {
    constructor() {
        this.ptSize = 10;
        this.u_ptSizeLoc = null;
        this.vertices = [
            perc2glCoord(50), perc2glCoord(50), 1.0, 0.0, 0.0,
            perc2glCoord(10), perc2glCoord(70), 0.0, 1.0, 0.0,
            perc2glCoord(30), perc2glCoord(90), 1.0, 0.0, 0.0,
            perc2glCoord(80), perc2glCoord(90), 0.0, 1.0, 0.0,
            perc2glCoord(70), perc2glCoord(60), 1.0, 0.0, 0.0,
            perc2glCoord(90), perc2glCoord(30), 1.0, 0.0, 0.0,
        ];
        this.vertexShaderSrc = `
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
        this.fragShaderSrc = `
varying highp vec3 vColor;
void main(void) {
  gl_FragColor = vec4 (vColor , 1.0);
}
`;
    }
    init(engine) {
        const programe = engine.createProgram(this.vertices, this.vertexShaderSrc, this.fragShaderSrc);
        engine.setAttribute("a_pos", programe, 2, 4 * 5, 0);
        engine.setAttribute("a_clr", programe, 3, 4 * 5, 2 * 4);
        this.u_ptSizeLoc = engine.getUniformLocation(programe, "u_ptSize");
    }
    addVertex(x = 0, y = 0, r = 0, g = 0, b = 0, a = 1) {
        this.vertices.push(perc2glCoord(x));
        this.vertices.push(perc2glCoord(y));
        r = r > 1 ? 0 : r;
        g = g > 1 ? 0 : g;
        b = b > 1 ? 0 : b;
        a = a > 1 ? 1 : a;
        this.vertices.push(r);
        this.vertices.push(g);
        this.vertices.push(b);
    }
    draw(gl) {
        gl.uniform1f(this.u_ptSizeLoc, this.ptSize);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, this.vertices.length);
    }
}
