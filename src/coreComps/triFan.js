import perc2glCoord from "../functions/perc2glCoord.js";
export default class TriFan {
    constructor(x1, y1, x2, y2, x3, y3, r = 0, g = 0, b = 0, a = 1) {
        this.u_ColorLoc = null;
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        this.vertices = [
            perc2glCoord(x1), perc2glCoord(y1),
            perc2glCoord(x2), perc2glCoord(y2),
            perc2glCoord(x3), perc2glCoord(y3),
        ];
        this.vertexShaderSrc = `
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
        this.fragShaderSrc = `
uniform highp vec3 u_Color;
void main(void) {
  gl_FragColor = vec4 (u_Color , 1.0);
}
`;
    }
    init(engine) {
        const programe = engine.createProgram(this.vertices, this.vertexShaderSrc, this.fragShaderSrc);
        engine.setAttribute("a_pos", programe, 2, 4 * 2, 0);
        this.u_ColorLoc = engine.getUniformLocation(programe, "u_Color");
    }
    addVertex(x = 0, y = 0) {
        this.vertices.push(perc2glCoord(x));
        this.vertices.push(perc2glCoord(y));
    }
    draw(gl) {
        gl.uniform3fv(this.u_ColorLoc, [this.r, this.g, this.b]);
        gl.drawArrays(gl.TRIANGLE_FAN, 0, this.vertices.length);
    }
}
