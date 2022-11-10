import GlUtil from "./glUtil.js";
import perc2glCoord from "../addObj/perc2glCoord.js";
const vertexShaderSrc = `
attribute highp vec2 a_pos;

attribute float a_pointWidth;
attribute highp vec3 a_clr;
varying highp vec3 v_clr;

void main(void) {
v_clr = a_clr;
//-------------------------------------------------------
    gl_PointSize = a_pointWidth;
    gl_Position = vec4(a_pos.x, a_pos.y,1.0,1.0 );
}
`;
const fragShaderSrc = `
varying highp vec3 v_clr;

void main(void) {
  gl_FragColor = vec4 (v_clr , 1.0);
}
`;
export default class CorePoint {
    constructor(vertices = []) {
        this.program = null;
        this.buffer = null;
        this.vertices = vertices;
    }
    setData(vertices) {
        this.vertices = vertices;
    }
    update(gl) {
        const vertexShader = GlUtil.createShader(gl, vertexShaderSrc, gl.VERTEX_SHADER);
        const fragmentShader = GlUtil.createShader(gl, fragShaderSrc, gl.FRAGMENT_SHADER);
        this.program = GlUtil.getProgram(gl, vertexShader, fragmentShader);
        this.buffer = GlUtil.getBuffer(gl);
        GlUtil.bindBuffer(gl, this.buffer, this.vertices);
        GlUtil.linkNuseProgram(gl, this.program);
        GlUtil.setAttribute(gl, "a_pos", this.program, 2, 4 * 6, 0);
        GlUtil.setAttribute(gl, "a_pointWidth", this.program, 1, 4 * 6, 2 * 4);
        GlUtil.setAttribute(gl, "a_clr", this.program, 3, 4 * 6, 3 * 4);
    }
    addPoint(x, y, width = 10, r = 0, g = 0, b = 0) {
        this.vertices.push(perc2glCoord(x));
        this.vertices.push(perc2glCoord(y));
        this.vertices.push(width);
        this.vertices.push(r);
        this.vertices.push(g);
        this.vertices.push(b);
    }
    draw(gl) {
        if (this.buffer == null) {
            throw new Error("buffer is null the comp may not be initialized");
        }
        GlUtil.bindBuffer(gl, this.buffer, this.vertices);
        gl.drawArrays(gl.POINTS, 0, (this.vertices.length / 6));
    }
}
