import GlUtil from "./glUtil.js";
export default class engine {
    constructor(canvasId = "bilza") {
        this.gl = GlUtil.getGl(canvasId);
    }
    getGl() {
        return this.gl;
    }
    getProgram(vshader, fshader) {
        return GlUtil.getProgram(this.gl, vshader, fshader);
    }
    getBuffer() {
        return GlUtil.getBuffer(this.gl);
    }
    createShader(shaderSource, shaderType) {
        return GlUtil.createShader(this.gl, shaderSource, shaderType);
    }
    bindBuffer(buff, buffData) {
        return GlUtil.bindBuffer(this.gl, buff, buffData);
    }
    linkNuseProgram(prgrm) {
        return GlUtil.linkNuseProgram(this.gl, prgrm);
    }
    clear(r = 0, g = 0, b = 0, a = 1) {
        GlUtil.clear(this.gl, r, g, b, a);
    }
    setAttribute(nameStr, programe, numberOfComps, stride, offset = 0) {
        GlUtil.setAttribute(this.gl, nameStr, programe, numberOfComps, stride, offset);
    }
    stdVertexShaderSrc() {
        return GlUtil.stdVertexShaderSrc();
    }
    stdFragShaderSrc() {
        return GlUtil.stdFragShaderSrc();
    }
}
