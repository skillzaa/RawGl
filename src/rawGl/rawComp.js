import verShaderFirst from "../shaders/vertex/verShaderFirst.js";
import perc2glCoord from "../functions/perc2glCoord.js";
export default class RawComp {
    constructor(rgba) {
        this.rgba = rgba;
        this.vertices = [];
        this.vertexPosBuffer = null;
        this.program = null;
    }
    addVertex(x, y) {
        this.vertices.push(perc2glCoord(x));
        this.vertices.push(perc2glCoord(y));
    }
    setColor(rgba) {
        this.rgba = rgba;
    }
    init(gl, fragShaderStr) {
        this.program = this.getProgram(gl, verShaderFirst(), fragShaderStr);
        this.vertexPosBuffer = this.getBuffer(gl);
    }
    getBuffer(gl) {
        let b = gl.createBuffer();
        if (b == null) {
            throw ("failed to create buffer");
        }
        return b;
    }
    getProgram(gl, vstr, fstr) {
        const pgm = gl.createProgram();
        var vshader = this.createShader(gl, vstr, gl.VERTEX_SHADER);
        var fshader = this.createShader(gl, fstr, gl.FRAGMENT_SHADER);
        if (pgm == null) {
            throw new Error("failed to create program");
        }
        gl.attachShader(pgm, vshader);
        gl.attachShader(pgm, fshader);
        return pgm;
    }
    draw(gl) {
        if (this.program == null) {
            throw new Error("init error");
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexPosBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
        gl.linkProgram(this.program);
        gl.useProgram(this.program);
        const vertexPosAttrib = gl.getAttribLocation(this.program, 'pos');
        gl.enableVertexAttribArray(vertexPosAttrib);
        gl.vertexAttribPointer(vertexPosAttrib, 2, gl.FLOAT, false, 0, 0);
        gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length);
    }
    createShader(gl, str, type) {
        var shader = gl.createShader(type);
        if (shader == null) {
            throw new Error("shaders could not be created");
        }
        gl.shaderSource(shader, str);
        gl.compileShader(shader);
        return shader;
    }
}
