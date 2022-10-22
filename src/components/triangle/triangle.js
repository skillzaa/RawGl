import verShaderFirst from "../../shaders/vertex/verShaderFirst.js";
import fragShaderFirst from "../../shaders/fragment/fragShaderFirst.js";
export default class Triangle {
    constructor(gl, vertices, rgba) {
        this.vertices = vertices;
        this.vertexPosBuffer = this.getBuffer(gl);
        this.program = this.getProgram(gl, verShaderFirst(), fragShaderFirst(rgba.r, rgba.g, rgba.b, rgba.a));
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
        pgm.vertexPosAttrib = gl.getAttribLocation(pgm, 'pos');
        return pgm;
    }
    setVertexPosition(gl) {
    }
    draw(gl) {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexPosBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(this.program.vertexPosAttrib);
        gl.vertexAttribPointer(this.program.vertexPosAttrib, 2, gl.FLOAT, false, 0, 0);
        gl.linkProgram(this.program);
        gl.useProgram(this.program);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
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
