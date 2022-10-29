import perc2glCoord from "../functions/perc2glCoord.js";
export default class CoreTri {
    constructor(r = 0.4, g = 0, b = 0, a = 1) {
        this.u_ColorLoc = null;
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        this.vertices = [];
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
        const programe = engine.createProgram(this.vertexShaderSrc, this.fragShaderSrc);
        engine.setAttribute("a_pos", programe, 2, 4 * 2, 0);
        this.u_ColorLoc = engine.getUniformLocation(programe, "u_Color");
    }
    addTriangle(x1, y1, x2, y2, x3, y3) {
        this.vertices.push(perc2glCoord(x1));
        this.vertices.push(perc2glCoord(y1));
        this.vertices.push(perc2glCoord(x2));
        this.vertices.push(perc2glCoord(y2));
        this.vertices.push(perc2glCoord(x3));
        this.vertices.push(perc2glCoord(y3));
    }
    draw(gl) {
        gl.uniform3fv(this.u_ColorLoc, [this.r, this.g, this.b]);
        gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length);
    }
}
