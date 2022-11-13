import GlUtil from "../core/glUtil.js";
const vertexShaderSrc = `
attribute highp vec2 a_pos;

attribute highp vec3 a_clr;
varying highp vec3 v_clr;

void main(void) {
v_clr = a_clr;
//-------------------------------------------------------
    gl_PointSize = 1.0;
    gl_Position = vec4(a_pos.x, a_pos.y,1.0,1.0 );
}
`;
const fragShaderSrc = `
varying highp vec3 v_clr;

void main(void) {
  gl_FragColor = vec4 (v_clr , 1.0);
}
`;
export default class BaseTriComp {
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
        GlUtil.setAttribute(gl, "a_pos", this.program, 2, 4 * 5, 0);
        GlUtil.setAttribute(gl, "a_clr", this.program, 3, 4 * 5, 2 * 4);
    }
    draw(gl) {
        if (this.buffer == null) {
            throw new Error("buffer is null the comp may not be initialized");
        }
        GlUtil.bindBuffer(gl, this.buffer, this.vertices);
        gl.drawArrays(gl.TRIANGLES, 0, (this.vertices.length));
    }
}
