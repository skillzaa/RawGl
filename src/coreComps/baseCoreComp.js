import GlUtil from "../core/glUtil.js";
import perc2glCoord from "../functions/perc2glCoord.js";
export default class BaseCoreComp {
    constructor() {
        this.program = null;
        this.buffer = null;
        this.vertices = [];
    }
    init(gl, vertexShaderSrc, fragShaderSrc) {
        const vertexShader = GlUtil.createShader(gl, vertexShaderSrc, gl.VERTEX_SHADER);
        const fragmentShader = GlUtil.createShader(gl, fragShaderSrc, gl.FRAGMENT_SHADER);
        const program = GlUtil.getProgram(gl, vertexShader, fragmentShader);
        this.buffer = GlUtil.getBuffer(gl);
        GlUtil.bindBuffer(gl, this.buffer, this.vertices);
        GlUtil.linkNuseProgram(gl, program);
        this.program = program;
    }
    addTriangle(x1, y1, x2, y2, x3, y3) {
        this.vertices.push(perc2glCoord(x1));
        this.vertices.push(perc2glCoord(y1));
        this.vertices.push(perc2glCoord(x2));
        this.vertices.push(perc2glCoord(y2));
        this.vertices.push(perc2glCoord(x3));
        this.vertices.push(perc2glCoord(y3));
    }
    getProgram() {
        if (this.program == null) {
            throw new Error("program is null the comp may not be initialized");
        }
        return this.program;
    }
    update() {
        this.vertices[0] += 0.001;
    }
    draw(gl) {
        if (this.buffer == null) {
            throw new Error("buffer is null the comp may not be initialized");
        }
        GlUtil.bindBuffer(gl, this.buffer, this.vertices);
        gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length);
    }
    setAttribute(gl, nameStr, numberOfComps, stride, offset = 0) {
        GlUtil.setAttribute(gl, nameStr, this.getProgram(), numberOfComps, stride, offset);
    }
    getUniformLocation(gl, uniformName) {
        return GlUtil.getUniformLocation(gl, this.getProgram(), uniformName);
    }
}
