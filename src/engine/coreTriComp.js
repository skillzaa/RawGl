import verShaderFirst from "../shaders/vertex/verShaderFirst.js";
import fragShaderFirst from "../shaders/frag/fragShaderFirst.js";
import perc2glCoord from "../functions/perc2glCoord.js";
export default class CoreTriComp {
    constructor(rgba, x = 0, y = 0, width = 20, height = 10) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.rgba = rgba;
        this.vertices = [
            0.0, 0.5, 1.0, 0.0, 0.0,
            -0.5, -0.5, 0.0, 1.0, 0.0,
            0.5, -0.5, 0.0, 0.0, 1.0,
        ];
        this.vertexPosBuffer = null;
        this.program = null;
        this.drawMode = "triangles";
    }
    addVertex(x, y) {
        this.vertices.push(perc2glCoord(x));
        this.vertices.push(perc2glCoord(y));
    }
    init(gl) {
        this.program = this.getProgram(gl, verShaderFirst(), fragShaderFirst());
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
        const vertexPosAttrib = gl.getAttribLocation(this.program, 'a_pos');
        const vertexColorAttrib = gl.getAttribLocation(this.program, 'a_clr');
        console.log("vertexPosAttrib", vertexPosAttrib);
        console.log("vertexColorAttrib", vertexColorAttrib);
        gl.enableVertexAttribArray(vertexPosAttrib);
        gl.enableVertexAttribArray(vertexColorAttrib);
        gl.vertexAttribPointer(vertexPosAttrib, 2, gl.FLOAT, false, 5 * 4, 0);
        gl.vertexAttribPointer(vertexColorAttrib, 3, gl.FLOAT, false, 5 * 4, 2 * 4);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    createShader(gl, str, type) {
        var shader = gl.createShader(type);
        if (shader == null) {
            throw new Error("shaders could not be created");
        }
        gl.shaderSource(shader, str);
        gl.compileShader(shader);
        let compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (!compiled) {
            var errors = gl.getShaderInfoLog(shader);
            console.log('Failed to compile with these errors:' + "type:" + type, errors);
        }
        return shader;
    }
}
