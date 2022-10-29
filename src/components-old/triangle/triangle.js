import verShaderFirst from "../../shaders/vertex/verShaderFirst.js";
import fragShaderFirst from "../../shaders/frag/fragShaderFirst.js";
import perc2glCoord from "../../functions/perc2glCoord.js";
export default class Triangle {
    constructor(gl, rgba, x1, y1, x2, y2, x3, y3) {
        this.vertices = [
            perc2glCoord(x1),
            perc2glCoord(y1),
            perc2glCoord(x2),
            perc2glCoord(y2),
            perc2glCoord(x3),
            perc2glCoord(y3)
        ];
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
        return pgm;
    }
    draw(gl) {
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexPosBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices), gl.STATIC_DRAW);
        gl.linkProgram(this.program);
        gl.useProgram(this.program);
        const vertexPosAttrib = gl.getAttribLocation(this.program, 'pos');
        gl.enableVertexAttribArray(vertexPosAttrib);
        gl.vertexAttribPointer(vertexPosAttrib, 2, gl.FLOAT, false, 0, 0);
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
