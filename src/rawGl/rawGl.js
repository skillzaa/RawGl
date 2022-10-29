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
        return GlUtil.stdVertexShaderSrc();
    }
    stdFragShaderSrc() {
        return GlUtil.stdFragShaderSrc();
    }
    getUniformLocation(programe, uniformName) {
        const x = this._gl.getUniformLocation(programe, uniformName);
        if (x == null) {
            throw new Error("uniform not found");
        }
        return x;
    }
}
