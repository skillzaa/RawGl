import GlUtil from "./glUtil.js";
export default class engine {
    constructor(canvasId = "bilza") {
        this._gl = GlUtil.getGl(canvasId);
    }
    createProgram(vertices, vertexShaderSrc, fragShaderSrc) {
        const vertexShader = this.createShader(vertexShaderSrc, this._gl.VERTEX_SHADER);
        const fragmentShader = this.createShader(fragShaderSrc, this._gl.FRAGMENT_SHADER);
        const programe = this.getProgram(vertexShader, fragmentShader);
        const VOB = this.getBuffer();
        this.bindBuffer(VOB, vertices);
        this.linkNuseProgram(programe);
        return programe;
    }
    gl() {
        return this._gl;
    }
    getProgram(vshader, fshader) {
        return GlUtil.getProgram(this._gl, vshader, fshader);
    }
    getBuffer() {
        return GlUtil.getBuffer(this._gl);
    }
    createShader(shaderSource, shaderType) {
        return GlUtil.createShader(this._gl, shaderSource, shaderType);
    }
    bindBuffer(buff, buffData) {
        return GlUtil.bindBuffer(this._gl, buff, buffData);
    }
    linkNuseProgram(prgrm) {
        return GlUtil.linkNuseProgram(this._gl, prgrm);
    }
    clear(r = 0, g = 0, b = 0, a = 1) {
        GlUtil.clear(this._gl, r, g, b, a);
    }
    setAttribute(nameStr, programe, numberOfComps, stride, offset = 0) {
        GlUtil.setAttribute(this._gl, nameStr, programe, numberOfComps, stride, offset);
    }
    stdVertexShaderSrc() {
        const r = `
attribute highp vec2 a_pos;
attribute highp vec3 a_clr;

// uniform float angle;
varying highp vec3 vColor;

void main(void) {
  gl_PointSize = 1.0;
    gl_Position = vec4( 
                        a_pos.x,
                        a_pos.y,
                        1.0,
                        1.0 );
    vColor = a_clr;
}
`;
        return r;
    }
    stdFragShaderSrc() {
        const r = `
    varying highp vec3 vColor;
    void main(void) {
      gl_FragColor = vec4 (vColor , 1.0);
    }
    `;
        return r;
    }
    getUniformLocation(programe, uniformName) {
        const x = this._gl.getUniformLocation(programe, uniformName);
        if (x == null) {
            throw new Error("uniform not found");
        }
        return x;
    }
}
